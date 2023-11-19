import { useContext, useEffect } from "react";
import { SceneContext } from "./Canvas";
import { Color3 } from "@babylonjs/core";

export function DefaultEnvironment({ color }: { color: string }) {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const color3 = Color3.FromHexString(color);
    const helper = scene.createDefaultEnvironment({
      skyboxColor: color3,
      groundColor: color3,
      groundSize: 50,
      skyboxSize: 50
    });

    return () => {
      helper?.dispose();
    }
  }, [scene, color]);

  return null;
}
