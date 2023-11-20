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
    <>
      <h1 className="mb-6 text-2xl font-black flex justify-between">
        Projects <BackToHome />
      </h1>
      <div className="overflow-auto">
        <Project
          name="NPC Dialog Editor"
          date="2019"
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
        <video className="mb-9" src={media.src} muted />
      )}
      {media?.type === "img" && (
        <Image className="mb-9" src={media.src} alt="" />
      )}
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p>
          Commodo non culpa id velit fugiat anim tempor veniam officia. Culpa id
          cillum ad officia. Esse aliqua excepteur tempor eiusmod nostrud ex
          fugiat ea aliqua labore elit. Nulla exercitation consectetur culpa non
          ipsum veniam enim aute officia proident. Consequat dolore quis
          exercitation aliquip consectetur laboris nostrud laborum et cillum
          veniam. Amet consequat esse laboris veniam.
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <p>
          Incididunt excepteur sit elit mollit consequat elit fugiat do id.
          Labore ad voluptate voluptate consequat qui. Aute officia magna
          nostrud mollit nostrud est non officia ex commodo commodo incididunt.
          Laborum culpa et aliqua amet voluptate. Deserunt ut aliqua
          reprehenderit voluptate esse occaecat est incididunt in ut
          exercitation fugiat. Amet nulla ea est voluptate nostrud sint
          incididunt proident enim pariatur ullamco consectetur non.
        </p>
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
