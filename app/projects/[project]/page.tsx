import Image from "next/image";
import proto_social_webvr from "./content/proto_social_webvr";
import npc_dialogue_editor from "./content/npc_dialogue_editor";
import webvr_environment_editor from "./content/webvr_environment_editor";
import { notFound } from "next/navigation";

const contentObject = {
  "npc-editor": npc_dialogue_editor,
  "social-vr": proto_social_webvr,
  // "environment-editor": webvr_environment_editor,
};

export default function Project({
  params,
}: {
  params: { project: keyof typeof contentObject };
}) {
  const content = contentObject[params.project];

  if (!content) notFound();

  const { name, date, media, status, description, stack } = content;

  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <h3 className="italic mb-6">
        {date} - {status}
      </h3>
      {media.type === "video" ? (
        <video className="mb-9" src={media.src} controls muted autoPlay />
      ) : (
        <div>
          <img className="mb-9" src={media.src} alt="" />
        </div>
      )}
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p>{description}</p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
