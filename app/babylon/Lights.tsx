import { useContext, useEffect } from "react";
import { SceneContext } from "./Canvas";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";

export function Lights() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.4;
    return () => {
      light.dispose();
    };
  }, [scene]);

  return null;
}
