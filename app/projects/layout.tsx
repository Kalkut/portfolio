import Link from "next/link";
import { ReactNode } from "react";

const projects_2016 = [
  { name: "Social WebVR Experiment", id: "social-webvr-experiment" },
];

const projects_2017 = [
  {
    name: "YouTube/Facebook WebVR Browser",
    id: "youtube-facebook-webvr-browser",
  },
  { name: "Social WebVR Prototype", id: "social-webvr-prototype" },
];

const projects_2018 = [
  { name: "Tiled WebVR World Editor", id: "tiled-world-editor" },
  { name: "Spatial Reddit", id: "spatial-reddit" },
];

const projects_2019 = [
  { name: "WebXR City Builder", id: "webxr-city-builder" },
  { name: "NPC Editor", id: "npc-editor" },
  { name: "Building Editor", id: "building-editor" },
];

const projects_2021 = [
  { name: "WebXR Space Editor", id: "webxr-space-editor" },
  { name: "WebXR PDF Reader", id: "webxr-pdf-reader" },
];

const projects_2022 = [
  { name: "WebXR Google Drive Client", id: "webxr-google-drive-client" },
];

const projectsGroupedByYear = [
  { year: "2016", projects: projects_2016 },
  { year: "2017", projects: projects_2017 },
  { year: "2018", projects: projects_2018 },
  { year: "2019", projects: projects_2019 },
  { year: "2021", projects: projects_2021 },
  { year: "2022", projects: projects_2022 },
];

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-0 w-full h-full xl:bg-white/80 bg-white xl:w-1/3">
      <div className="flex flex-col h-full w-full">
        <h1 className="mb-6 text-2xl font-black flex justify-between p-4 2xl:pt-8 2xl:px-8 pb-0">
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>{" "}
          <BackToHome />
        </h1>
        <div className="overflow-auto">
          <menu id="projects" className="px-4 pb-8 shrink">
            {projectsGroupedByYear.reduce<ReactNode[]>(
              (nodes, { year, projects }) => {
                return [
                  ...nodes,
                  <Divider key={year}>{year}</Divider>,
                  projects.map(({ name, id }) => (
                    <li className="flex justify-center mb-1" key={id}>
                      <Link href={`/projects/${id}#description`}>{name}</Link>
                    </li>
                  )),
                ];
              },
              [],
            )}
          </menu>
          <div id="description">{children}</div>
        </div>
      </div>
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

function Divider({ children }: { children: string }) {
  return (
    <div className="relative mb-2">
      <div className=" inset-0 flex items-center" aria-hidden="true">
        <div className="border-t grow border-gray-300" />
        <span className=" px-3 text-base font-semibold leading-6 text-gray-900">
          {children}
        </span>
        <div className=" border-t grow border-gray-300" />
      </div>
    </div>
  );
}
