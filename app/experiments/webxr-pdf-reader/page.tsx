import Link from "next/link";

export default function WebXrPdfReader() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">WebXR PDF Reader</h2>
      <h3 className="italic mb-6">2021 - Discontinued</h3>
      <video
        className="mb-4"
        src="/videos/pdf_reader.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p className="mb-2">
          The readability issue I faced with my{" "}
          <Link className="underline" href="/experiments/webxr-space-editor">
            WebXR Space Editor
          </Link>{" "}
          and the fact that I had not shipped since a long time then, made me
          feel like I had to make a statement. I had to ship a WebXR app with
          the most readable text possible. PDF being very reliant on text being
          readable was the perfect challenge. Could I make an app where reading
          a PDF would feel good ?
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p className="mb-2">
          A bare bones PDF Reader, where you can load a PDF a read it in or out
          of VR.
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Challenges</h4>
        <p className="mb-2">
          I solved the readability issue by using what was a new browser API at
          the time :{" "}
          <a href="https://www.w3.org/TR/webxrlayers-1/">WebXR Layers</a>. The
          API is still only implemented in the Meta Quest Browser currently.
        </p>
        <p className="mb-2">
          It is a <strong>necessary</strong> API for UI intensive WebXR apps. It
          is not that complicated to use when you are already a bit aware of how
          the WebXR API and{" "}
          <a
            className="underline"
            href="https://developer.chrome.com/blog/inside-browser-part3/#compositing"
          >
            Compositing
          </a>{" "}
          works.
        </p>
        <p className="mb-2">
          Using layers in an existing WebGL application where other things are
          rendered can have unintended effects, like having your layers always
          in front or behind of your WebGL content. All of those issues ends up
          being manageable with a few tricks.
        </p>
        <p className="mb-2">
          I used{" "}
          <a className="underline" href="https://mozilla.github.io/pdf.js/">
            pdf.js
          </a>
          , to render PDFs. Great rendering and overall well engineered really
          kudos to Mozilla for the library. But using it can be tedious with
          modern js tooling.
        </p>
        <p className="mb-2">
          Also I found a that it{" "}
          <a
            className="underline"
            href="https://github.com/mozilla/pdf.js/issues/13299"
          >
            breaks with WebXR under certain conditions
          </a>
          , even{" "}
          <a
            className="underline"
            href="https://github.com/mozilla/hubs/issues/3968"
          >
            Mozilla Hubs faces the bug
          </a>
          . I have a confession to make about this bug:{" "}
          <a
            className="underline"
            href="https://github.com/mozilla/pdf.js/commit/e9718954b4de63766690ec4c59482509f17b116c"
          >
            I fixed it in my own pdf.js fork
          </a>{" "}
          and I did not contribute back... <em>yet</em>.
        </p>
        <p>
          I will publish the fix one day but if you reader wants to do it
          because it is 2030 and I stil have not bothered, you have my blessing
          !
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          I shipped it and 7.000 pages were read by 31 people !
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React</li>
          <li>3D: React-Three-Fiber, Three.js</li>
          <li>Infrastructure: Firebase Hosting</li>
        </ul>
      </section>
    </section>
  );
}
