import Link from "next/link";

export default function SocialWebVrExperiment() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-semibold">Social WebVR Experiment</h2>
      <h3 className="italic mb-6">2016 - Discontinued</h3>
      <video
        className="mb-4"
        src="/videos/social_webvr_experiment/multiplayer.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <p className="italic mb-9">
        Multiplayer editing : A user (a pink sphere here...) selects a color,
        then a shape. Adds it to the world and ta-da! The other user sees it in
        realtime
      </p>

      <section className="mb-5">
        <section className="mb-5">
          <h4 className="font-semibold mb-3">Context</h4>
          In 2016 the{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Oculus_Rift_CV1"
          >
            Oculus Rift CV1
          </a>{" "}
          and the{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/HTC_Vive#History"
          >
            OG Vive
          </a>{" "}
          were being released. Only the Vive had motion controllers, mobile VR
          with{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Google_Cardboard"
          >
            Cardboard
          </a>{" "}
          was a common first experience with VR. The VR api on the web was the
          now defunct{" "}
          <a
            className="underline"
            href="https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API"
          >
            WebVR API
          </a>
          .{" "}
          <a className="underline" href="https://aframe.io/">
            A-Frame
          </a>{" "}
          a web framework made by Mozilla that allowed developers to use{" "}
          <a className="underline" href="https://threejs.org/">
            Three.js
          </a>{" "}
          in a declarative way with DOM elements was the most common way of
          building WebVR apps. The marketing hype behind the "Metaverse" had not
          yet happened but it was basically the way too ambitious idea of this
          first WebVR project of mine.
        </section>

        <section>
          <h4 className="font-semibold mb-3">Concept</h4>
          <p className="mb-1.5">
            <span>
              The idea was to make a webapp where multiple users could spend
              time and create an environment together where they could share
              media content like watching YouTube videos.
            </span>
            <video
              className="my-8"
              // className="w-2/5"
              controls
              muted
              autoPlay
              loop
              src="/videos/social_webvr_experiment/youtube.mp4"
            ></video>
          </p>
          <p className="mb-1.5 flex flex-col-reverse">
            <video
              className="my-8"
              // className="w-2/5"
              controls
              muted
              autoPlay
              loop
              src="/videos/social_webvr_experiment/building.mp4"
            ></video>
            <span>
              The environment creation would be done using primitive shapes
              likeboxes, sphere, cylinder and tools like extrusion and cropping
              (hole making)
            </span>
          </p>
        </section>
        <section className="mb-5">
          <h4 className="font-semibold mb-3">Challenges</h4>
          <p className="mb-1.5">
            In 2016, the WebVR ecosystem was <strong>rough</strong>. Bugs in
            librairies were frequent, browser compatibility was bad, there was
            no solution for text input in VR, most VR devices had no motion
            controllers and mobile VR had to rely on gaze interactions (clicking
            just by looking at an object for a few seconds).
          </p>
        </section>
        <section className="mb-5">
          <h4 className="font-semibold mb-3">Outcome</h4>
          <p className="mb-1.5">
            This project was my introductionary deep dive into 3D/VR
            programming, it also helped me getting comfortable working with
            bleeding edge frameworks and web APIs. Still after months of work
            and rework, with all the experience I was gathering I knew I had to
            change my approach. This was both too big of a project for the level
            of skill I was at and mobile VR was not going to do the trick mostly
            due to the lack of controllers. I reused part of the logic I built
            in the YouTube player and developed a{" "}
            <Link
              className="underline"
              href="/experiments/youtube-facebook-webvr-browser"
            >
              Youtube/Facebook WebVR browser
            </Link>{" "}
            instead.
          </p>
        </section>
      </section>

      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React, Redux</li>
          <li>3D/VR: A-Frame, Three.js</li>
          <li>Browser APIs: WebVR, MediaSource, WebSocket</li>
          <li>Back: Node.js, Redis</li>
        </ul>
      </section>
    </section>
  );
}
