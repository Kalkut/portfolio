import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { useContext, useEffect, useState } from "react";
import { SceneContext } from "./Canvas";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import "@babylonjs/loaders/glTF";

export function Model({
  url,
  position = Vector3.ZeroReadOnly,
  rotation = Vector3.ZeroReadOnly,
}: {
  url: string;
  position?: Vector3;
  rotation?: Vector3;
}) {
  const [mesh, setMesh] = useState<AbstractMesh>();
  const scene = useContext(SceneContext);

  // Initialization, Asset Fetching
  useEffect(() => {
    loadModel();

    async function loadModel () {
      const result = await SceneLoader.ImportMeshAsync("", url, "", scene);
      const _mesh = result.meshes[0]
      console.log(result.meshes.map(({ name }) => name), "result");
      const bbinfos = result.meshes[0].getHierarchyBoundingVectors(true);
      _mesh.scaling.scaleInPlace(1.5 / Math.abs(bbinfos.max.y - bbinfos.min.y))
      setMesh(_mesh);
    }
  }, [scene, url]);

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