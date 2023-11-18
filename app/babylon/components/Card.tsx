"use client"
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import {MeshBuilder} from "@babylonjs/core/Meshes/meshBuilder";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { useContext, useEffect, useReducer } from "react";
import { SceneContext } from "../App";
import { VideoTexture } from "@babylonjs/core/Materials/Textures/videoTexture";
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { Scene } from "@babylonjs/core/scene";
import { CombineAction } from "@babylonjs/core/Actions/directActions";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";
import { InterpolateValueAction } from "@babylonjs/core/Actions/interpolateValueAction";
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import {Rectangle} from "@babylonjs/gui/2D/controls/rectangle";

export function Card({
  title,
  type,
  preview,
  position = Vector3.ZeroReadOnly,
  rotation = Vector3.ZeroReadOnly,
}: {
  title: string;
  preview: string;
  type: "image" | "video"
  position?: Vector3;
  rotation?: Vector3;
}) {
  const [{ texture, textBlock, mesh }, dispatch] = useReducer(reducer, {});
  // const [texture, setTexture] = useState<Texture>();
  // const [mesh, setMesh] = useState<Mesh>();
  const scene = useContext(SceneContext);

  // Texture Load
  useEffect(() => {
    const isImg = type === "image";
    const _texture = isImg ?
    new Texture(preview, scene) :
    new VideoTexture("Video preview", preview, scene,undefined,false,undefined,{ muted: true});

    _texture.onLoadObservable.addOnce(() => {
      dispatch({ key: "texture", value: _texture });
      // setTexture(_texture);
    });

    return () => {
      _texture.dispose();
    }
  }, [preview, type, scene]);

  // Card Setup
  useEffect(() => {
    if(!texture) return;
    
    const _mesh = createCardMesh(texture, scene);
    const {backdrop: _backdrop, textBlock: _textBlock} = createBackdropMesh(texture, scene);
    _backdrop.setParent(_mesh);
    _backdrop.position.z = -0.001
    makeCardHoverable(_backdrop, scene);
    // setMesh(_mesh);
    dispatch([{ key: "mesh", value: _mesh }, { key: "textBlock", value: _textBlock }]);

    return () => {
      _mesh.dispose();
      _backdrop.dispose()
    }
  }, [scene, texture]);

  // Transform update
  useEffect(() => {
    if(!mesh) return;

    if(position) mesh.position = position;
    if(rotation) mesh.rotation = rotation;
  }, [mesh, position, rotation]);

  useEffect(() => {
    if(!textBlock) return;

    textBlock.text = title;
  }, [textBlock, title])


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
  // rectangle.height = "50%";
  rectangle.thickness = 0;
  advancedTexture.addControl(rectangle);

  const textBlock = new TextBlock();
  textBlock.textWrapping = true;
  textBlock.color = "white";
  textBlock.fontSize = "7%"
  rectangle.addControl(textBlock);
  
  return {backdrop, textBlock};
}

function fromTextureToPlane(texture: Texture, scene: Scene) {
  const size = texture.getSize();
  const width = size.width / size.height;
  const mesh = MeshBuilder.CreatePlane("Card", { width, height: 1 }, scene);
  return mesh;
}

function makeCardHoverable(backdrop: Mesh, scene: Scene) {
  const addPointer = new ExecuteCodeAction(
    ActionManager.NothingTrigger,
    () => {
      document.body.classList.add("cursor-pointer");
    },
  );
  const removePointer = new ExecuteCodeAction(
    ActionManager.NothingTrigger,
    () => {
      document.body.classList.remove("cursor-pointer")
    },
  );

  const fadeIn = new InterpolateValueAction(ActionManager.NothingTrigger, backdrop, "visibility", 0.8, 200);
  const fadeOut = new InterpolateValueAction(ActionManager.NothingTrigger, backdrop, "visibility", 0, 200);

  const hover = new CombineAction(ActionManager.OnPointerOverTrigger, [addPointer, fadeIn]);
  const blur = new CombineAction(ActionManager.OnPointerOutTrigger, [removePointer, fadeOut]);

  const actionManager = new ActionManager(scene);
  actionManager.registerAction(hover);
  actionManager.registerAction(blur);
  backdrop.actionManager = actionManager;
}

type SetTexture = { key: "texture", value: Texture };
type SetMesh = { key: "mesh", value: Mesh };
// type SetBackdrop = { key: "backdrop", value: Mesh };
type SetTextBlock = { key: "textBlock", value: TextBlock };

type Action = SetTexture
| SetMesh
// | SetBackdrop
| SetTextBlock

type CardState = Partial<{
  texture: Texture;
  mesh: Mesh;
  // backdrop: Mesh;
  textBlock: TextBlock;
}>;

function reducer(state: CardState, action: Action | Action[]) {
  const updatedValues: CardState = !Array.isArray(action) ?
  { [action.key]: action.value } :
    action.reduce((_state, _action) => ({ ..._state, [_action.key]: _action.value}), {});

    return {
    ...state,
    ...updatedValues
  }
}