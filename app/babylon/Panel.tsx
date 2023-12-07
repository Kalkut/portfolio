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

export function Panel({
  children,
  position,
  rotation,
  scaling,
}: {
  children: ReactNode;
  position?: Vector3;
  rotation?: Vector3;
  scaling?: Vector3;
}) {
  type PanelState = { mesh: Mesh; textBlock: TextBlock };
  const scene = useContext(SceneContext);
  const [{ mesh }, setPanelState] = useReducer(
    mergeNewValuesIntoState<PanelState>,
    {},
  );

  useEffect(() => {
    const _mesh = createPanelMesh(scene);
    const _textBlock = attachAdvancedDynamicTexture(_mesh);
    _textBlock.text = "2016";

    setPanelState({ mesh: _mesh, textBlock: _textBlock });
    return () => {
      _mesh.dispose();
    };
  }, [scene]);

  useEffect(() => {
    if (!mesh) return;

    if (position) mesh.position = position;
    if (rotation) mesh.rotation = rotation;
    if (scaling) mesh.scaling = scaling;
  }, [mesh, position, rotation, scaling]);

  if (!mesh) return null;
  return (
    <ParentNodeContext.Provider value={mesh}>
      {children}
    </ParentNodeContext.Provider>
  );
}

function createPanelMesh(scene: Scene) {
  const mesh = MeshBuilder.CreatePlane("Card", {}, scene);
  // const material = new StandardMaterial("Card", scene);
  // mesh.visibility = 0.5;
  // mesh.material = material;
  return mesh;
}

function createDateMesh(scene: Scene) {
  const mesh = MeshBuilder.CreatePlane("Card", {}, scene);
  const material = new StandardMaterial("Card", scene);
  mesh.material = material;
  return mesh;
}

function attachAdvancedDynamicTexture(mesh: Mesh) {
  const advancedTexture = AdvancedDynamicTexture.CreateForMesh(mesh);

  const rectangle = new Rectangle();
  rectangle.background = "black";
  rectangle.alpha = 0.5;
  rectangle.width = "100%";
  rectangle.thickness = 10;
  rectangle.color = "white";
  advancedTexture.addControl(rectangle);

  const textBlock = new TextBlock();
  textBlock.textWrapping = true;
  textBlock.horizontalAlignment = TextBlock.HORIZONTAL_ALIGNMENT_LEFT;
  textBlock.verticalAlignment = TextBlock.VERTICAL_ALIGNMENT_TOP;
  textBlock.top = "-42%";
  textBlock.left = "-37%";
  textBlock.color = "white";
  textBlock.fontSize = "7%";
  advancedTexture.addControl(textBlock);

  return textBlock;
}
