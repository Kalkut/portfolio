import { useContext, useEffect } from "react";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneContext } from "./Canvas";
import { Scene } from "@babylonjs/core/scene";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { CameraInputTypes } from "@babylonjs/core/Cameras/cameraInputsManager";
import { FreeCamera } from "@babylonjs/core";

export function Camera() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const destroyCamera = createArcRotateCamera(scene);
    return destroyCamera;
  }, [scene]);

  return null;
}

function createArcRotateCamera(scene: Scene) {
  const initialAlpha = (3 * Math.PI) / 2;
  const initialBeta = (0.8 * Math.PI) / 2;
  const angularRadius = (1.2 * Math.PI) / 5;
  const camera = new ArcRotateCamera(
    "camera",
    0,
    0,
    0,
    new Vector3(0, 1.5, -1.6),
    scene,
  );

  camera.minZ = 0.01;
  camera.position = new Vector3(0, 1.5, -1.6);
  camera.alpha = initialAlpha;
  camera.beta = initialBeta;
  console.log(camera, "camera");
  camera.attachControl();
  camera.inputs.remove(camera.inputs.attached.keyboard);
  camera.inputs.remove(camera.inputs.attached.gamepad);
  camera.angularSensibilityX = 2500;
  camera.panningSensibility = 0;
  camera.lowerRadiusLimit = 0;
  camera.upperRadiusLimit = 0;
  camera.lowerAlphaLimit = initialAlpha - angularRadius;
  camera.upperAlphaLimit = initialAlpha + angularRadius;
  camera.lowerBetaLimit = initialBeta - 0.15 * angularRadius;
  camera.upperBetaLimit = initialBeta + 0.15 * angularRadius;

  return () => {
    camera.dispose();
  };
}

function createUniversalCamera(scene: Scene) {
  const camera = new FreeCamera("camera", new Vector3(0, 1.5, -1.6), scene);
  camera.inputs.remove(camera.inputs.attached.keyboard);
  camera.inputs.remove(camera.inputs.attached.gamepad);

  camera.attachControl();

  return () => {
    camera.dispose();
  };
}
