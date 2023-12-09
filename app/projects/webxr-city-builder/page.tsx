import Link from "next/link";

export default function WebXRCityBuilder() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">WebXR City Builder</h2>
      <h3 className="italic mb-6">2018/2019</h3>
      <video
        className="mb-4"
        src="/videos/world/world_edition.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p>
          WebVR is dead, long live WebXR ! Not that it changes much of anything
          for most devs using libraries like Three.js and A-Frame. Speaking of
          libraries, since I was determined to <em>(once again...)</em> go big I
          decided to help myself by trying a more batteries included 3D one :
          Babylon.js. Also I needed much more stable tools to focus on the
          already big enough challenges I was facing
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Concept</h4>
        <p>
          This time I <strong>(finally)</strong> bought 3D assets in order to
          make the app look good. Thanks to the Synty collection, I had enough
          assets to start world edtion with a city builder.
        </p>
        <video
          className="my-8"
          // className="w-2/5"
          controls
          muted
          autoPlay
          loop
          src="/videos/world/world_vr.mp4"
        ></video>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-2">
          This was a good start, Babylon.js was an <strong>awesome</strong>{" "}
          tool. Demos with this app were way more positive than with any of my
          previous builders. I still needed to make the created worlds livelier,
          also I wanted buildings users could enter in. So I started a building
          and a NPC editor for those purposes.
        </p>
        <p className="mb-2">
          It gave me good a understanding of what kind of experiences/games can
          be built build with those assets, and as far as low poly goes I don't
          see a limit on the kind or the scope of what can be achieved.
        </p>
        <p className="mb-2">
          I had to focus on working for customers, I paused the developement of
          this project and of the two others editors (
          <Link className="underline" href="/projects/npc-editor#description">
            NPC
          </Link>{" "}
          and{" "}
          <Link
            className="underline"
            href="/projects/building-editor#description"
          >
            Building
          </Link>
          ) and just never resumed those.
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React</li>
          <li>3D: Babylon.js, 3ds Max (Maxscript), Maya</li>
          <li>Back: Node.js, Puppeteer</li>
          <li>
            Cloud: Google Cloud Platform (Firebase Hosting, App Engine,
            Datastore, Cloud Functions)
          </li>
        </ul>
      </section>
    </section>
  );
}
