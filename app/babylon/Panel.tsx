import { ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { SceneContext } from "./Canvas";
import { Scene } from "@babylonjs/core/scene";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Rectangle } from "@babylonjs/gui/2D/controls/rectangle";
import { ParentNodeContext } from "./contexts/parentNode";
import { mergeNewValuesIntoState } from "../lib/reducers/mergeNewValuesIntoState";
import { TransformNode } from "@babylonjs/core";

export function Panel({
  children,
  position,
  rotation,
  width,
  height,
  title,
}: {
  title: string;
  children?: ReactNode;
  position?: Vector3;
  rotation?: Vector3;
  width?: number;
  height?: number;
}) {
  type PanelState = {
    mesh: Mesh;
    textBlock: TextBlock;
    childrenAnchor: TransformNode;
  };
  const scene = useContext(SceneContext);
  const [{ mesh, childrenAnchor, textBlock }, setPanelState] = useReducer(
    mergeNewValuesIntoState<PanelState>,
    {},
  );

  useEffect(() => {
    if (textBlock) textBlock.text = title;
  }, [textBlock, title]);

  useEffect(() => {
    const _mesh = createPanelMesh(scene, width, height);
    const _textBlock = attachAdvancedDynamicTexture(_mesh, width, height);

    const _childrenAnchor = new TransformNode("panel_childrenAnchor", scene);
    _childrenAnchor.position.z = -0.01;
    _childrenAnchor.parent = _mesh;

    setPanelState({
      mesh: _mesh,
      textBlock: _textBlock,
      childrenAnchor: _childrenAnchor,
    });

    return () => {
      _mesh.dispose();
    };
  }, [scene, width, height]);

  useEffect(() => {
    if (!mesh) return;

    if (position) mesh.position = position;
    if (rotation) mesh.rotation = rotation;
  }, [mesh, position, rotation]);

  if (!childrenAnchor || !children) return null;
  return (
    <ParentNodeContext.Provider value={childrenAnchor}>
      {children}
    </ParentNodeContext.Provider>
  );
}

function createPanelMesh(scene: Scene, width?: number, height?: number) {
  const mesh = MeshBuilder.CreatePlane("Card", { width, height }, scene);
  mesh.scaling.scaleInPlace(0.1);
  return mesh;
}

function attachAdvancedDynamicTexture(mesh: Mesh, width = 1, height = 1) {
  const defaultPixelSize = 1024;
  const canvasWidth = defaultPixelSize * width;
  const canvasHeight = defaultPixelSize * height;
  const advancedTexture = AdvancedDynamicTexture.CreateForMesh(
    mesh,
    canvasWidth,
    canvasHeight,
  );

  const backgroundRectangle = new Rectangle();
  backgroundRectangle.background = "black";
  backgroundRectangle.alpha = 0.5;
  backgroundRectangle.width = "100%";
  backgroundRectangle.thickness = 10;
  backgroundRectangle.color = "white";
  advancedTexture.addControl(backgroundRectangle);

  // const rectangle = new Rectangle();
  // rectangle.width = "100%";
  // rectangle.horizontalAlignment = Rectangle.HORIZONTAL_ALIGNMENT_LEFT;
  // rectangle.verticalAlignment = Rectangle.VERTICAL_ALIGNMENT_TOP;

  const fontSize = 256;
  const textBlock = new TextBlock();
  textBlock.textWrapping = true;
  // textBlock.horizontalAlignment = TextBlock.HORIZONTAL_ALIGNMENT_LEFT;
  // textBlock.verticalAlignment = TextBlock.VERTICAL_ALIGNMENT_TOP;
  textBlock.fontSizeInPixels = fontSize;
  textBlock.topInPixels = -0.5 * canvasHeight + fontSize;
  // textBlock.leftInPixels = -0.4 * canvasWidth;
  textBlock.color = "white";
  // textBlock.heightInPixels = 128;
  advancedTexture.addControl(textBlock);

  return textBlock;
}
