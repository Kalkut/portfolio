import { useContext, useEffect } from "react";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneContext } from "./Canvas";

export function Camera() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const initialAlpha = (-0.75 * Math.PI) / 2;
    const initialBeta = (0.75 * Math.PI) / 2;
    const angularRadius = (0.15 * Math.PI) / 2;
    const camera = new ArcRotateCamera(
      "arcCamera",
      initialAlpha,
      initialBeta,
      20,
      new Vector3(0.5, 1, 0.5),
      scene,
    );
    camera.attachControl();
    camera.lowerRadiusLimit = 10;
    camera.upperRadiusLimit = 15;
    camera.lowerAlphaLimit = initialAlpha - angularRadius;
    camera.upperAlphaLimit = initialAlpha + angularRadius;
    camera.lowerBetaLimit = initialBeta - angularRadius;
    camera.upperBetaLimit = initialBeta + angularRadius;

    return () => {
      camera.dispose();
    };
  }, [scene]);

  return null;
}
