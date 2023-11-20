import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    "NPC Dialog Editor",
    "WebXR Space Editor",
    "Building Editor",
    "WebVR Environment Editor",
    "Proto Social WebVR",
    "WebVR Reddit Browser",
  ];

  return (
    <div className="p-4">
      <div>
        <h1 className="mb-6 text-2xl font-black flex justify-between">
          Projects <BackToHome />
        </h1>
        <Project
          name="NPC Dialog Editor"
          date="2019"
          media={{ type: "video", src: "/videos/dialog_editor.mp4" }}
        />
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

type ProjectProps = {
  name: string;
  date: string;
  media: { type: "video" | "img"; src: string };
};

function Project({ name, date, media }: ProjectProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{name}</h2>
      <h3 className="italic mb-6">{date}</h3>
      {media?.type === "video" && (
        <video className="mb-6" src={media.src} muted />
      )}
      {media?.type === "img" && (
        <Image className="mb-6" src={media.src} alt="" />
      )}
      <section className="mb-3">
        <h4 className="font-semibold mb-1">What is it ?</h4>
        <p>... TBD...</p>
      </section>
      <section className="mb-3">
        <h4 className="font-semibold mb-1">Technical stack</h4>
        <p>... TBD...</p>
      </section>
      <section className="mb-3">
        <h4 className="font-semibold mb-1">Outcome</h4>
        <p>... TBD...</p>
      </section>
    </section>
  );
}
