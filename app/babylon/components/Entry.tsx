"use client"
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import {MeshBuilder} from "@babylonjs/core/Meshes/meshBuilder";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { useContext, useEffect, useState } from "react";
import { SceneContext } from "../App";

export function Entry({
  preview,
  position = Vector3.ZeroReadOnly,
  rotation = Vector3.ZeroReadOnly,
}: {
  preview: string;
  position?: Vector3;
  rotation?: Vector3;
}) {
  const [mesh, setMesh] = useState<Mesh>();
  const scene = useContext(SceneContext);

  useEffect(() => {
    const _mesh = MeshBuilder.CreatePlane("entry", {}, scene);
    
    const material = new StandardMaterial("Entry", scene);
    if(preview) {
      const texture = new Texture(preview, scene);
      material.diffuseTexture = texture;
      material.emissiveTexture = texture;
    }
    
    _mesh.material = material;
    setMesh(_mesh);
    return () => {
      _mesh.dispose();
    }
  }, [scene, preview]);
  
  // Position update
  useEffect(() => {
    if(!mesh) return;

    if(position) mesh.position = position;
    if(rotation) mesh.rotation = rotation;
  }, [mesh, position, rotation])

  // On Destroy
  useEffect(() => {
    return () => {
      mesh?.dispose(true, true);
    }
  }, [mesh]);

  return null;
}
