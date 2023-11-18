"use client"
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import {MeshBuilder} from "@babylonjs/core/Meshes/meshBuilder";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { useContext, useEffect, useState } from "react";
import { SceneContext } from "../App";
import { VideoTexture } from "@babylonjs/core/Materials/Textures/videoTexture";
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { CombineAction, ExecuteCodeAction, InterpolateValueAction, Scene } from "@babylonjs/core";

export function Card({
  preview,
  type,
  position = Vector3.ZeroReadOnly,
  rotation = Vector3.ZeroReadOnly,
}: {
  preview: string;
  type: "image" | "video"
  position?: Vector3;
  rotation?: Vector3;
}) {
  const [texture, setTexture] = useState<Texture>();
  const [mesh, setMesh] = useState<Mesh>();
  const scene = useContext(SceneContext);

  // Texture Load
  useEffect(() => {
    const isImg = type === "image";
    const _texture = isImg ?
    new Texture(preview, scene) :
    new VideoTexture("Video preview", preview, scene,undefined,false,undefined,{ muted: true});

    _texture.onLoadObservable.addOnce(() => {
      setTexture(_texture);
    });

    return () => {
      _texture.dispose();
    }
  }, [preview, type, scene]);

  // Card Setup
  useEffect(() => {
    if(!texture) return;
    
    const _mesh = createCardMesh(texture, scene);
    const _backdrop = createBackdropMesh(texture, scene);
    _backdrop.setParent(_mesh);
    _backdrop.position.z = -0.001
    makeCardHoverable(_mesh, _backdrop, scene);
    setMesh(_mesh);

    return () => {
      _mesh.dispose();
    }
  }, [scene, texture]);

  // Transform update
  useEffect(() => {
    if(!mesh) return;

    if(position) mesh.position = position;
    if(rotation) mesh.rotation = rotation;
  }, [mesh, position, rotation]);


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
  const material = new StandardMaterial("Card Backdrop", scene);
  material.diffuseColor.set(0,0,0);
  
  backdrop.material = material;
  backdrop.visibility = 0;
  return backdrop;
}

function fromTextureToPlane(texture: Texture, scene: Scene) {
  const size = texture.getSize();
  const width = size.width / size.height;
  const mesh = MeshBuilder.CreatePlane("Card", { width, height: 1 }, scene);
  return mesh;
}

function makeCardHoverable(mesh: Mesh, backdrop: Mesh, scene: Scene) {
  const addPointer = new ExecuteCodeAction(
    ActionManager.NothingTrigger,
    () => {
      document.body.classList.add("pointer");
    },
  );
  const removePointer = new ExecuteCodeAction(
    ActionManager.NothingTrigger,
    () => {
      document.body.classList.remove("pointer")
    },
  );

  const fadeIn = new InterpolateValueAction(ActionManager.NothingTrigger, backdrop, "visibility", 0.6, 200);
  const fadeOut = new InterpolateValueAction(ActionManager.NothingTrigger, backdrop, "visibility", 0, 200);

  const hover = new CombineAction(ActionManager.OnPointerOverTrigger, [addPointer, fadeIn]);
  const blur = new CombineAction(ActionManager.OnPointerOutTrigger, [removePointer, fadeOut]);

  const actionManager = new ActionManager(scene);
  actionManager.registerAction(hover);
  actionManager.registerAction(blur);
  mesh.actionManager = actionManager;
}
