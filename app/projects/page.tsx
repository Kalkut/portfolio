import Link from "next/link";
import Image from "next/image";
import npc_dialogue_editor from "./content/npc_dialogue_editor";
export default function Projects() {
  const projects = [
    "NPC Dialogue Editor",
    "WebXR Space Editor",
    "Building Editor",
    "WebVR Environment Editor",
    "Proto Social WebVR",
    "WebVR Reddit Browser",
  ];

  return (
    <>
      <h1 className="mb-6 text-2xl font-black flex justify-between p-4 pb-0">
        Projects <BackToHome />
      </h1>
      <div className="overflow-auto px-4">
        <Project
          {...npc_dialogue_editor}
        />
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

type ProjectProps = {
  name: string;
  date: string;
  status: string;
  description: string;
  stack: readonly string[];
  media: { type: "video" | "img"; src: string };
};

function Project({ name, date, media, status, description, stack }: ProjectProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{name}</h2>
      <h3 className="italic mb-6">{date} - {status}</h3>
      {media?.type === "video" && (
        <video className="mb-9" src={media.src} controls muted autoPlay />
      )}
      {media?.type === "img" && (
        <Image className="mb-9" src={media.src} alt="" />
      )}
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p>{description}</p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          {stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </section>
  );
}