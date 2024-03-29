import Link from "next/link";

export default function WebXrGoogleDriveClient() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">WebXR Google Drive Client</h2>
      <h3 className="italic mb-6">2022</h3>
      <video className="mb-4" controls muted autoPlay loop>
        <source type="video/webm" src="/videos/google_drive_client.webm" />
        <source type="video/mp4" src="/videos/google_drive_client.mp4" />
      </video>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p className="mb-2">
          The{" "}
          <Link className="underline" href="/projects/webxr-pdf-reader">
            PDF reader
          </Link>{" "}
          was successful enough to encourage me to purse a wider feature set.
          Since loading content on a headset adds too much friction, i decided
          to let users access their content from cloud storages like Google
          Drive. I also wanted to support more file formats.
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p className="mb-2">
          A Google Drive web (2d) and WebXR client it can read PDFs, images,
          videos and 3D Models
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Challenges</h4>
        <p className="mb-2">
          Mixing{" "}
          <a
            className="underline"
            href="https://developers.googleblog.com/2021/08/gsi-jsweb-deprecation.html"
          >
            the new way of signing in a Google account
          </a>{" "}
          and authenticated Google API calls was awkard. Their migration path
          was not well thought in my experience. Well it did work in the end,
          but I have no fond memories of this implementation
        </p>
        <p className="mb-2">
          In order to make authenticated access to videos and images to Google
          Drive transparent to the codebase, i proxied requests made by the
          browser for resources called by img & video tag with a Service Worker
          that added the authentication headers. Personally I find this trick
          quite cool, the web is actually an insanely powerful platform !
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          Well I was working on it and{" "}
          <a
            className="underline"
            href="https://www.reddit.com/r/OculusQuest/comments/xm9u02/prototype_of_a_webxr_google_drive_explorer/"
          >
            talking about it
          </a>{" "}
          but I had a sudden health issue that prevented me from working on it
          for the most part of a year.
        </p>
        <p className="mb-1.5">
          Gladly I got better and back to work! I am currently working on some
          twist of this idea. You will soon see a new entry on this portfolio,
          but you reached the end for now !
        </p>

        <p>
          <strong>Thank you for having read up to here !</strong>
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React</li>
          <li>3D: React-Three-Fiber, Three.js</li>
          <li>Back: Node.js, PostgreSQL, Hasura, GraphQL</li>
          <li className="flex">
            <span className="flex-nowrap whitespace-nowrap mr-1">
              Infrastructure:
            </span>{" "}
            Google Cloud Platfrom, Cloud SQL, Cloud Run, Google Cloud Storage,
            Cloud Build, Terraform
          </li>
        </ul>
      </section>
    </section>
  );
}
