import Link from "next/link";

const projects = [
  { name: "Social WebVR Experiment", id: "social-webvr-experiment" },
  {
    name: "YouTube/Facebook WebVR Browser",
    id: "youtube-facebook-webvr-browser",
  },
  { name: "Proto Social WebVR", id: "social-webvr-proto" },
  { name: "Tiled WebVR World Editor", id: "tiled-world-editor" },
  { name: "WebXR City Builder", id: "webxr-city-builder" },
  { name: "NPC Editor", id: "npc-editor" },
  { name: "Building Editor", id: "building-editor" },
  { name: "Spatial Reddit", id: "spatial-reddit" },
  { name: "WebXR Space Editor", id: "webxr-space-editor" },
  { name: "WebXR PDF Reader", id: "webxr-pdf-reader" },
];

export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full xl:bg-white/80 bg-white flex flex-col xl:w-1/3">
      <h1 className="mb-6 text-2xl font-black flex justify-between p-4 pb-0">
        Experiments <BackToHome />
      </h1>
      <ul className="p-4">
        {projects.map(({ name, id }) => (
          <li key={id}>
            <Link href={`/experiments/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className="overflow-auto">{children}</div>
    </div>
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
