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
import { ExecuteCodeAction } from "@babylonjs/core";

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
  const [hovered, setHovered] = useState(false);
  const scene = useContext(SceneContext);

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

  useEffect(() => {
    if(!texture) return;
    const size = texture.getSize();
    console.log(size, "size", texture);
    const width = size.width / size.height;
    const _mesh = MeshBuilder.CreatePlane("Card", { width, height: 1}, scene);
    const material = new StandardMaterial("Card", scene);
    material.diffuseTexture = texture;
    material.emissiveTexture = texture;
    
    _mesh.material = material;
    setMesh(_mesh);

    return () => {
      _mesh.dispose();
      material.dispose();
    }
  }, [scene, texture]);
  
  // Position update
  useEffect(() => {
    if(!mesh) return;

    if(position) mesh.position = position;
    if(rotation) mesh.rotation = rotation;
  }, [mesh, position, rotation]);

  useEffect(() => {
    if(!hovered) return;
    document.body.classList.add("pointer");

    return () => {
      document.body.classList.remove("pointer");
    }
  }, [hovered]);

  // On Destroy
  useEffect(() => {
    if(!mesh) return;
    
    const hover = new ExecuteCodeAction(
      { trigger: ActionManager.OnPointerOverTrigger, target: mesh},
      () => setHovered(true),
    );
    const blur = new ExecuteCodeAction(
      { trigger: ActionManager.OnPointerOutTrigger, target: mesh},
      () => setHovered(false),
    );

    const hoverable = hover.then(blur);

    const actionManager = new ActionManager(scene);
    actionManager.registerAction(hoverable);
    mesh.actionManager = actionManager;

    return () => {
      mesh.dispose(true, true);
    }
  }, [mesh, scene]);

  return null;
}
