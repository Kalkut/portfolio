import Link from "next/link";
import { ReactNode } from "react";

export default function Projects({ children }: { children: ReactNode}) {

  const projects = [
    {name: "NPC Dialogue Editor", "id": "npc-editor"},
    { name: "WebVR Environment Editor" , "id": "environment-editor"},
    // "WebXR Space Editor",
    // "Building Editor",
    // "Proto Social WebVR",
    // "WebVR Reddit Browser",
  ];

  return (
    <>
      <h1 className="mb-6 text-2xl font-black flex justify-between p-4 pb-0">
        Projects <BackToHome />
      </h1>
      <ul>
        {projects.map(({ name, id}) =><Link key={id} href={`/${id}`}>{name}</Link>)}
      </ul>
      <div className="overflow-auto px-4">
        {children}
      </div>
    </>
  );
}

function BackToHome() {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Link>
  );
}