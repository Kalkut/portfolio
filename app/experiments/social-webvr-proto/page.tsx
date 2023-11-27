import Link from "next/link";

export default function Project() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">Social WebVR Prototype</h2>
      <h3 className="italic mb-6">2017</h3>
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
          attempt
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p>
          A graphical upgrade on{" "}
          <Link
            className="underline"
            href="/experiments/social-webvr-experiment"
          >
            the first version
          </Link>
          . It incorporated the{" "}
          <Link href="http://localhost:3000/experiments/youtube-facebook-webvr-browser">
            Facebook Browser
          </Link>{" "}
          at first
        </p>
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
