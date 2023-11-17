import { useContext, useEffect } from "react";
import { Color4 } from "@babylonjs/core";
import { SceneContext } from "./App";

export function Background({ color }: { color: string }) {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const initialBackground = scene.clearColor.clone();
    scene.clearColor.copyFrom(Color4.FromHexString(color));

    return () => {
      scene.clearColor.copyFrom(initialBackground);
    }

  }, [scene, color]);

  return null;
}
