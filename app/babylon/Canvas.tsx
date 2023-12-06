"use client";

import { Scene } from "@babylonjs/core/scene";
import { Engine } from "@babylonjs/core/Engines/engine";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

export function Canvas({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<Scene>();
  const [ready, setReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new Engine(canvas, true);
    const _scene = new Scene(engine);

    setScene(_scene);
    engine.runRenderLoop(() => {
      _scene.render();
    });

    const resize = () => engine.resize(false);
    // window.addEventListener("resize", resize);

    return () => {
      engine.stopRenderLoop();
      _scene.dispose();
      engine.dispose();
      // window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width=""
        height=""
        className="h-full w-full touch-none bg-pink-700"
      ></canvas>
      {/* <canvas ref={canvasRef} className="h-full w-full absolute" /> */}
      {scene && (
        <SceneContext.Provider value={scene}>
          <ReadyContext.Provider value={setReady}>
            {children}
          </ReadyContext.Provider>
        </SceneContext.Provider>
      )}
    </>
  );
}

export const SceneContext = createContext<Scene>({} as Scene);
export const ReadyContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {},
);
