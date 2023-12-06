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
  useReducer,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";

type Runtime = { engine: Engine; scene: Scene };
export function Canvas({ children }: { children: ReactNode }) {
  const [{ scene, engine }, setRuntime] = useReducer(
    (state: Partial<Runtime>, newValues: Partial<Runtime>) => ({
      ...state,
      ...newValues,
    }),
    {},
  );

  const [ready, setReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const _engine = new Engine(canvas, true, { antialias: true });
    const _scene = new Scene(_engine);

    setRuntime({ scene: _scene, engine: _engine });
    _engine.runRenderLoop(() => {
      _scene.render();
    });

    const resize = () => _engine.resize();
    window.addEventListener("resize", resize);

    return () => {
      _engine.stopRenderLoop();
      _scene.dispose();
      _engine.dispose();
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/" && engine) engine.resize();
  }, [engine, pathname]);

  return (
    <>
      <div
        className={clsx(
          "h-screen w-screen overflow-hidden",
          pathname === "/projects" && "hidden xl:block",
        )}
      >
        <canvas ref={canvasRef} className={clsx("h-full w-full")}></canvas>
      </div>
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
