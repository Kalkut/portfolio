"use client"
import { useContext, useEffect } from "react";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneContext } from "./App";

export function Camera() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const camera = new ArcRotateCamera("arcCamera", -Math.PI / 2, 0.75 * Math.PI / 2, 5, Vector3.UpReadOnly, scene);
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
