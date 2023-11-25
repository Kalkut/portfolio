export default function Project() {
  return (
    <section className="px-4 overflow-auto">
      <h2 className="text-xl font-semibold">Social WebVR Experiment</h2>
      <h3 className="italic mb-6">2016 - Discontinued</h3>
      <video
        className="mb-1"
        src="/videos/social_webvr_experiment/multiplayer.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <p className="italic mb-9">
        Multiplayer editing : A user selects a color, then a shape. Adds it to
        the world and ta-da! The other user sees it in realtime
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
          <p className="mb-1.5 flex">
            <span>
              The idea was an app where multiple users could spend time and
              create an environment together where they could share media
              content like watching YouTube videos.
            </span>
            <video
              className="w-2/5"
              controls
              muted
              autoPlay
              loop
              src="/videos/social_webvr_experiment/youtube.mp4"
            ></video>
          </p>
          <p className="mb-1.5">
            I wanted it to work as much as possible on regular web and mobile VR
            without controllers so I used a lot what VR devs at the time called
            gaze interaction (clicking by looking at something for a specific
            amount of time)
          </p>
          <p className="mb-1.5">
            <span>
              To compensate for the lack of buttons I implemented a contextual
              menu
            </span>
          </p>
        </section>
      </section>

      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li></li>
        </ul>
      </section>
    </section>
  );
}
