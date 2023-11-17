import { useContext, useEffect } from "react";
import { SceneContext } from "./App";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { GUI3DManager } from "@babylonjs/gui/3D/gui3DManager";
import { ScatterPanel as BabylonScatterPaenel } from "@babylonjs/gui/3D/controls/scatterPanel";

export default function ScatterPanel() {
  const scene = useContext(SceneContext);

  useEffect(() => {
    const anchor = new TransformNode("");
    const manager = new GUI3DManager(scene);
    const panel = new BabylonScatterPaenel();
    panel.margin = 0.2;

    manager.addControl(panel);
    panel.linkToTransformNode(anchor);

    return () => {
      panel.dispose();
      manager.dispose();
      anchor.dispose();
    }
  }, [scene]);

  return null;
}