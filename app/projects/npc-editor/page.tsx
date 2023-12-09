import Link from "next/link";

export default function NpcEditor() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">NPC Editor</h2>
      <h3 className="italic mb-6">2018/2019</h3>
      <video
        className="mb-4"
        src="/videos/npc/dialog_editor.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p>
          To make the cities made with the{" "}
          <Link className="underline" href="/projects/webxr-city-builder">
            city builder
          </Link>{" "}
          livelier I wanted to add NPCs, so here goes the NPC editor
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Concept</h4>
        <p>
          The app lets an user edit a tree of animated{" "}
          <strong className="bg-slate-50 border border-dashed sm:border-none sm:bg-white px-1 rounded-sm">
            Dialogue Lines
          </strong>{" "}
          recited by the NPC and of{" "}
          <strong className="bg-yellow-500 px-1 rounded-sm">
            User Choices
          </strong>{" "}
          selectable by a player talking to the NPC
        </p>
        <figure className="my-8">
          <video
            className="mb-1.5"
            controls
            muted
            autoPlay
            loop
            src="/videos/npc/animation_editor.mp4"
          ></video>
          <figcaption>
            <em>
              I tested animation selection directly in 3d and dropped it because
              animations were too heavy to snappily load. I did some research on
              this subject and I think I could pull it off now.
            </em>
          </figcaption>
        </figure>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          I had to focus on working for customers while the three editors (NPC,
          City, Building) were kept in stasis
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React</li>
          <li>3D: Babylon.js, 3ds Max (Maxscript), Maya</li>
          <li>Back: Node.js, Puppeteer</li>
          <li>
            Cloud: Google Cloud Platform (Datastore, App Engine, Cloud
            Functions)
          </li>
        </ul>
      </section>
    </section>
  );
}
