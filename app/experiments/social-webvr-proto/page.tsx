import Link from "next/link";

export default function SocialWebVRPrototype() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">Social WebVR Prototype</h2>
      <h3 className="italic mb-6">2017 - Discontinued</h3>
      <img className="mb-9" src="/pictures/social.jpg" alt="" />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p>
          Here we go again... A second attempt after my first{" "}
          <Link
            className="underline"
            href="/experiments/social-webvr-experiment"
          >
            Social WebVR
          </Link>{" "}
          one
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p>
          A graphical upgrade on the very primitive (to say the least){" "}
          <Link
            className="underline"
            href="/experiments/social-webvr-experiment"
          >
            first version
          </Link>
          . It incorporated the{" "}
          <Link
            className="underline"
            href="http://localhost:3000/experiments/youtube-facebook-webvr-browser"
          >
            Facebook Browser
          </Link>{" "}
          so that users could share content. It also had a few new features like
          room creation and sharing
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          I demoed this project multiple times but I just did not believe in it
          at this point. I saw more and more native SocialVR apps, some of which
          were as well done and innovative as possible at the time and I loved
          none of them. I just accepted that I just don't like Social VR and
          moved on. I decided to focus on the creative potential of VR by making
          an{" "}
          <Link className="underline" href="">
            environment editor
          </Link>
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>React</li>
          <li>A-Frame, Three.js</li>
          <li>WebSocket API</li>
          <li>Node.js</li>
        </ul>
      </section>
    </section>
  );
}
