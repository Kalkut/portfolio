import { ReactNode, useContext, useEffect } from "react";
import { ReadyContext, SceneContext } from "./Canvas";
import { Color3 } from "@babylonjs/core";

export function DefaultEnvironment({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  const scene = useContext(SceneContext);
  const setReady = useContext(ReadyContext);

  useEffect(() => {
    const color3 = Color3.FromHexString(color);
    const helper = scene.createDefaultEnvironment({
      skyboxColor: color3,
      groundColor: color3,
      groundSize: 50,
      skyboxSize: 50,
    });

    // helper?.skybox?.onMeshReadyObservable.addOnce(() => setReady(true));

    // if (helper) setTimeout(() => setReady(true));
    return () => {
      helper?.dispose();
    };
  }, [scene, color, setReady]);

  return children;
}
