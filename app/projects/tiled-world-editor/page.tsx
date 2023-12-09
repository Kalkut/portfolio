import Link from "next/link";

export default function TiledWebVRWorldEditor() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">Tiled WebVR World Editor</h2>
      <h3 className="italic mb-6">2017/2018</h3>
      <video
        className="mb-4"
        src="/videos/ground.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p>
          After giving up on{" "}
          <Link className="underline" href="/projects/social-webvr-proto">
            Social VR
          </Link>
          , I wanted to focus on 3D world edition. The first step was to have a
          tool a user could create a ground, a room and then a building with. I
          choose to divide surfaces (ground, walls, ceilings) into tiles on
          which a user would draw high quality{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Physically_based_rendering"
          >
            PBR textures
          </a>
          .
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Concept</h4>
        <p>
          The editor is a multistep tool where at first the user is presented
          with a 10 square meters ground they can resize and paint textures and
          colors on. A building's is created by resizing and drawing on a box,
          and a building is just a set of room
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          I was unconvinced by the approach, to me this was leading me to
          nowhere. I killed it with no ceremony and moved on to a{" "}
          <Link
            className="underline"
            href="/projects/webxr-city-builder#description"
          >
            new approach on world editing
          </Link>
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React</li>
          <li>3D: A-Frame, Three.js</li>
          <li>Back: Node.js</li>
        </ul>
      </section>
    </section>
  );
}
