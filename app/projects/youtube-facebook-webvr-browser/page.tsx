import Link from "next/link";

export default function YouTubeFacebookWebVrProject() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-semibold">YouTube/Facebook WebVR Browser</h2>
      <h3 className="italic mb-6">2017</h3>
      <video
        className="mb-4"
        src="/videos/browser/navigation.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <p className="italic mb-9">
        Navigating YouTube subscriptions & Facebook pages with gaze interactions
      </p>

      <section className="mb-5">
        <section>
          <h4 className="font-semibold mb-3">Concept</h4>
          <p className="mb-1.5">
            <span>
              The goal was to explore the potential of mobile VR for media
              consumption on the web. For that I built an app where users can
              sign in with their YouTube and/or Facebook account(s) and browse
              content on those platforms
            </span>
            <video
              className="my-8"
              // className="w-2/5"
              controls
              muted
              autoPlay
              loop
              src="/videos/browser/browser_youtube_360_3D_videos.mp4"
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
              src="/videos/browser/browser_facebook_pictures.mp4"
            ></video>
            <span>
              One nice benefit of VR is that it makes both 360 & 3D videos much
              more engaging, so I added the possibility to only select those
              type of content. I also added speech recognition in order to
              circumvent the lack of text input & controllers on mobile VR.
            </span>
          </p>
        </section>
        <section className="mb-5">
          <h4 className="font-semibold mb-3">Challenges</h4>
          <p className="mb-1.5">
            Making YouTube work required proxying video ressources obtained with
            youtube-dl. Also WebVR was getting hidden behind a flag on Chrome at
            the time. I had to convince people to activate it, it was far from
            frictionless.
          </p>
        </section>
        <section className="mb-5">
          <h4 className="font-semibold mb-3">Outcome</h4>
          <p className="mb-1.5">
            I shipped it ! It was actually well recieved at the time, it was
            even mentioned in the{" "}
            <a className="underline" href="https://aframe.io/blog/awoa-62/">
              A-Frame newsletter
            </a>{" "}
            ! With a new found confidence in my ability to ship a complex WebVR
            app, I wanted to give another go at{" "}
            <Link
              className="underline"
              href="/projects/social-webvr-prototype#description"
            >
              trying to build a social VR app
            </Link>
            . Also the project's use of youtube-dl was not sustainable as it was
            against YouTube TOS so I killed it. In retrospect I could have
            pivoted this project toward a more generic VR online media
            consumption platform, but I guess hindsight truly is 20/20.
          </p>
        </section>
      </section>

      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React, Redux</li>
          <li>3D: A-Frame, Three.js</li>
          <li>Browser APIs: MediaSource API</li>
          <li>Back: Node.js</li>
          <li>Cloud/Infra: Google App Engine</li>
        </ul>
      </section>
    </section>
  );
}
