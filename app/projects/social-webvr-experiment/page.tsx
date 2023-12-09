import Link from "next/link";

export default function SocialWebVrExperiment() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-semibold">Social WebVR Experiment</h2>
      <h3 className="italic mb-6">2016</h3>
      <video
        className="mb-4"
        src="/videos/social_webvr_experiment/multiplayer.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <p className="italic mb-9">
        Multiplayer editing : A user (
        <span className="text-pink-600">the pink sphere</span> here...) selects
        <span className="text-yellow-600"> a color</span>, then a shape. Adds it
        to the world and ta-da! The other user sees it in realtime.
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
          building WebVR apps. The marketing hype behind the{" "}
          <em>Metaverse (™) </em> had not yet happened but it was basically the
          way too ambitious idea behind this first WebVR project of mine.
        </section>

        <section>
          <h4 className="font-semibold mb-3">Concept</h4>
          <p className="mb-1.5">
            The idea was to make a webapp where multiple users could spend time
            creating a 3D environment together and sharing media content like
            watching YouTube videos.
          </p>
          <figure className="my-8">
            <video
              className="mb-4"
              // className="w-2/5"
              controls
              muted
              autoPlay
              loop
              src="/videos/social_webvr_experiment/youtube.mp4"
            ></video>
            <figcaption>
              <em>
                The user can drop a media &quot;screen&quot; on which they can
                search for a YouTube video. Behold the ✨ dazzling ✨ custom
                made keyboard !
              </em>
            </figcaption>
          </figure>
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
              The environment creation is done using primitive shapes likeboxes,
              sphere, cylinder and editing tools like extrusion and cropping
              (hole cutting)
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
            This project marked my introductory deep dive into 3D/VR
            programming. It familiarized me with the reality of working with
            bleeding-edge frameworks and web APIs. After months of continuous
            refinement and accumulating experience, I realized I needed to
            change my approach. The project was too ambitious given my skill
            level, and mobile VR wasn&apos;t sufficient, mainly due to the lack
            of controllers. I repurposed some of the logic from the YouTube
            player and instead created a{" "}
            <Link
              className="underline"
              href="/projects/youtube-facebook-webvr-browser#description"
            >
              YouTube/Facebook WebVR browser
            </Link>
            .
          </p>
        </section>
      </section>

      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React, Redux</li>
          <li>3D/VR: A-Frame, Three.js</li>
          <li>Browser APIs: WebVR, MediaSource, WebSocket</li>
          <li>Back: Node.js, RethinkDB, Redis</li>
        </ul>
      </section>
    </section>
  );
}
