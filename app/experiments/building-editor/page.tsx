import Link from "next/link";

export default function BuildingEditor() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">Building Editor</h2>
      <h3 className="italic mb-6">2018/2019 - Discontinued</h3>
      <video
        className="mb-4"
        src="/videos/house_builder.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p>
          The{" "}
          <Link className="underline" href="/experiments/webxr-city-builder">
            city builder
          </Link>{" "}
          had buildings but players could not enter them, this project aimed to
          solve that
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Concept</h4>
        <p>
          It is a quite straighforward editor the video above pretty much says
          it all
        </p>
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
