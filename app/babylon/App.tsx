"use client"

import { Scene } from "@babylonjs/core/scene";
import { Engine } from "@babylonjs/core/Engines/engine";
import { ReactNode, createContext, useEffect, useLayoutEffect, useRef, useState } from "react";

export function App({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<Scene>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) return;

    const engine = new Engine(canvas, true);
    const _scene = new Scene(engine);

    setScene(_scene);
    engine.runRenderLoop(() => {
      _scene.render();
    });

    const resize = () => engine.resize();
    window.addEventListener('resize', resize)

    return () => {
      engine.stopRenderLoop();
      _scene.dispose();
      engine.dispose();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="h-full w-full" />
      {scene && <SceneContext.Provider value={scene}>{children}</SceneContext.Provider>}
    </>
  );
}

export const SceneContext = createContext<Scene>({} as Scene);
