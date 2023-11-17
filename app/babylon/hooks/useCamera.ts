import { useContext, useEffect } from "react";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneContext } from "../App";


export function useCamera() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const camera = new ArcRotateCamera("arcCamera", -Math.PI / 2, Math.PI / 4, 5, Vector3.UpReadOnly, scene);
    camera.attachControl();
    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 10;
    camera.upperBetaLimit = 0.9 * Math.PI / 2;

    return () => {
      camera.dispose();
    }
  }, [scene]);

  return null;
}
