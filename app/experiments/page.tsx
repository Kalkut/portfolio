import { ReactNode } from "react";

export default function Experiments({ children }: { children: ReactNode }) {
  return <div className="overflow-auto px-4">{children}</div>;
}
