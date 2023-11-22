import Image from "next/image";
import npc_dialogue_editor from "./content/npc_dialogue_editor";

const contentObject = {
  "npc-editor": npc_dialogue_editor
};

type ProjectProps = {
  name: string;
  date: string;
  status: string;
  description: string;
  stack: readonly string[];
  media: { type: "video" | "img"; src: string };
};

function Project({ params}: { params: { project: string }}) {
  const { name, date, media, status, description, stack } = contentObject[params.project];

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