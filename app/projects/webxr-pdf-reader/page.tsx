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
          <Link className="underline" href="/projects/webxr-space-editor">
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
        <p className="mb-2"></p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          I shipped it and 7.000 pages were read by 31 people in VR all around
          the world ! I did not promote it much, its spread is mostly due to
          word of mouth in the WebXR community. PDF is fine but then I intended
          to support much more format and features in order to{" "}
          <Link className="underline" href="/projects/google-drive-client/">
            build a full featured WebXR media consumption app
          </Link>
          . Still had to put the project on hiatus for a few month because of an
          other contract work.
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
