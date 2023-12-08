import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { useCallback, useContext, useEffect, useReducer } from "react";
import { SceneContext } from "./Canvas";
import { VideoTexture } from "@babylonjs/core/Materials/Textures/videoTexture";
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { Scene } from "@babylonjs/core/scene";
import { CombineAction } from "@babylonjs/core/Actions/directActions";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";
import { InterpolateValueAction } from "@babylonjs/core/Actions/interpolateValueAction";
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Rectangle } from "@babylonjs/gui/2D/controls/rectangle";
import { mergeNewValuesIntoState } from "../lib/reducers/mergeNewValuesIntoState";
import { ParentNodeContext } from "./contexts/parentNode";
import { useRouter } from "next/navigation";

export function Card({
  title,
  type,
  href,
  preview,
  position = Vector3.ZeroReadOnly,
  rotation = Vector3.ZeroReadOnly,
}: {
  href?: string;
  title: string;
  preview: string;
  type: "image" | "video";
  position?: Vector3;
  rotation?: Vector3;
}) {
  type CardState = Partial<{
    texture: Texture;
    mesh: Mesh;
    actionManager: ActionManager;
    textBlock: TextBlock;
  }>;
  const [{ texture, textBlock, mesh, actionManager }, dispatch] = useReducer(
    mergeNewValuesIntoState<CardState>,
    {},
  );
  const scene = useContext(SceneContext);
  const parentNode = useContext(ParentNodeContext);
  const router = useRouter();

  const goToLinkHref = useCallback(() => {
    if (href) router.push(href);
  }, [router, href]);

  useEffect(() => {
    if (actionManager) {
      const removeClickEvent = makeCardClickable(actionManager, goToLinkHref);
      return removeClickEvent;
    }
  }, [goToLinkHref, actionManager]);

  useEffect(() => {
    if (!parentNode || !mesh) return;
    mesh.parent = parentNode;
  }, [parentNode, mesh]);

  // Texture Load
  useEffect(() => {
    const isImg = type === "image";
    const _texture = isImg
      ? new Texture(preview, scene)
      : new VideoTexture(
          "Video preview",
          preview,
          scene,
          undefined,
          false,
          undefined,
          { muted: true },
        );

    _texture.onLoadObservable.addOnce(() => {
      dispatch({ texture: _texture });
    });

    return () => {
      _texture.dispose();
    };
  }, [preview, type, scene]);

  // Card Setup
  useEffect(() => {
    if (!texture) return;

    const _mesh = createCardMesh(texture, scene);
    const { backdrop: _backdrop, textBlock: _textBlock } = createBackdropMesh(
      texture,
      scene,
    );
    _backdrop.setParent(_mesh);
    _backdrop.position.z = -0.001;

    const { removeEvents, actionManager: _actionManager } = makeCardHoverable(
      _backdrop,
      scene,
    );

    dispatch({
      mesh: _mesh,
      textBlock: _textBlock,
      actionManager: _actionManager,
    });

    return () => {
      _mesh.dispose();
      removeEvents();
      _backdrop.dispose();
    };
  }, [scene, texture]);

  // Transform update
  useEffect(() => {
    if (!mesh) return;

    if (position) mesh.position = position;
    if (rotation) mesh.rotation = rotation;
  }, [mesh, position, rotation]);

  useEffect(() => {
    if (!textBlock) return;

    textBlock.text = title;
  }, [textBlock, title]);

  return null;
}

function createCardMesh(texture: Texture, scene: Scene) {
  const material = new StandardMaterial("Card", scene);
  material.diffuseTexture = texture;
  material.emissiveTexture = texture;

  const mesh = fromTextureToPlane(texture, scene);
  mesh.material = material;
  return mesh;
}

function createBackdropMesh(texture: Texture, scene: Scene) {
  const backdrop = fromTextureToPlane(texture, scene);
  backdrop.visibility = 0;

  const advancedTexture = AdvancedDynamicTexture.CreateForMesh(backdrop);
  advancedTexture.background = "black";

  const rectangle = new Rectangle();
  rectangle.width = "75%";
  rectangle.thickness = 0;
  advancedTexture.addControl(rectangle);

  const textBlock = new TextBlock();
  textBlock.textWrapping = true;
  textBlock.color = "white";
  textBlock.fontSize = "7%";
  rectangle.addControl(textBlock);

  return { backdrop, textBlock };
}

function fromTextureToPlane(texture: Texture, scene: Scene) {
  const size = texture.getSize();
  const width = size.width / size.height;
  const mesh = MeshBuilder.CreatePlane("Card", { width, height: 1 }, scene);
  return mesh;
}

function makeCardHoverable(backdrop: Mesh, scene: Scene) {
  const addPointer = new ExecuteCodeAction(ActionManager.NothingTrigger, () => {
    document.body.classList.add("cursor-pointer");
  });
  const removePointer = new ExecuteCodeAction(
    ActionManager.NothingTrigger,
    () => {
      document.body.classList.remove("cursor-pointer");
    },
  );

  const fadeIn = new InterpolateValueAction(
    ActionManager.NothingTrigger,
    backdrop,
    "visibility",
    0.6,
    200,
  );
  const fadeOut = new InterpolateValueAction(
    ActionManager.NothingTrigger,
    backdrop,
    "visibility",
    0,
    200,
  );

  const hover = new CombineAction(ActionManager.OnPointerOverTrigger, [
    addPointer,
    fadeIn,
  ]);
  const blur = new CombineAction(ActionManager.OnPointerOutTrigger, [
    removePointer,
    fadeOut,
  ]);

  const actionManager = new ActionManager(scene);
  actionManager.registerAction(hover);
  actionManager.registerAction(blur);
  backdrop.actionManager = actionManager;

  return {
    actionManager,
    removeEvents: () => {
      actionManager.unregisterAction(hover);
      actionManager.unregisterAction(blur);
    },
  };
}

function makeCardClickable(
  backdropActionManager: ActionManager,
  goToLinkHref: () => void,
) {
  const followLink = new ExecuteCodeAction(ActionManager.OnPickUpTrigger, () =>
    goToLinkHref(),
  );

  backdropActionManager.registerAction(followLink);

  return () => {
    backdropActionManager.unregisterAction(followLink);
  };
}
