import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { createContext } from "react";

export const ParentNodeContext = createContext<TransformNode | null>(null);
