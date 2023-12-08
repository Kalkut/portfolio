import { useContext, useEffect } from "react";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneContext } from "./Canvas";
import { Scene } from "@babylonjs/core/scene";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";

export function Camera() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const destroyCamera = createUniversalCamera(scene);
    return destroyCamera;
  }, [scene]);

  return null;
}

function createArcRotateCamera(scene: Scene) {
  const initialAlpha = (-0.75 * Math.PI) / 2;
  const initialBeta = (0.75 * Math.PI) / 2;
  const angularRadius = (0.15 * Math.PI) / 2;
  const camera = new ArcRotateCamera(
    "camera",
    initialAlpha,
    initialBeta,
    20,
    new Vector3(0.5, 2, 0.5),
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
}

function createUniversalCamera(scene: Scene) {
  const camera = new UniversalCamera(
    "camera",
    new Vector3(0, 1.5, -1.6),
    scene,
  );
  camera.attachControl();

  return () => {
    camera.dispose();
  };
}
