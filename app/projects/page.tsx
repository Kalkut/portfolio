import Link from "next/link";
import Image from "next/image";

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
      <h1 className="mb-6 text-2xl font-black flex justify-between">
        Projects <BackToHome />
      </h1>
      <div className="overflow-auto">
        <Project
          name="NPC Dialog Editor"
          date="2018"
          media={{ type: "video", src: "/videos/dialog_editor.mp4" }}
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
  media: { type: "video" | "img"; src: string };
};

function Project({ name, date, media }: ProjectProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{name}</h2>
      <h3 className="italic mb-6">{date}</h3>
      {media?.type === "video" && (
        <video className="mb-9" src={media.src} controls muted autoPlay />
      )}
      {media?.type === "img" && (
        <Image className="mb-9" src={media.src} alt="" />
      )}
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p>
          An NPC editor meant to be integrated in a 3D World Editor I was
          working on. With a combination of "Dialogue Lines" and "User Choices"
          (respectively in white and yellow in the video above) a top down
          interactive dialogue tree can be created.
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul className="list-disc">
          <li>Single Page App: React </li>
          <li>Single Page App: React </li>
        </ul>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p>
          Commodo commodo mollit aliquip laboris velit minim Lorem nisi
          excepteur laborum cupidatat ipsum labore. Ullamco commodo in occaecat
          velit amet occaecat fugiat nostrud quis pariatur. Minim ad nisi quis
          quis ullamco cillum voluptate. Pariatur eiusmod et do aliquip velit.
        </p>
      </section>
    </section>
  );
}
