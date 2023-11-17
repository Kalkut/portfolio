"use client"
import { useContext, useEffect } from "react";
import { SceneContext } from "./App";

export function Lights() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    scene.createDefaultLight(true);
  }, [scene]);

  return null;
}