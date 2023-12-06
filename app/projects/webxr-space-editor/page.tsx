import Link from "next/link";

export default function WebXrSpaceEditor() {
  return (
    <section className="px-4">
      <h2 className="text-xl font-semibold">WebXR Space Editor</h2>
      <h3 className="italic mb-6">2021 - Discontinued</h3>
      <video
        className="mb-4"
        src="/videos/environment.mp4"
        controls
        muted
        autoPlay
        loop
      />
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Context</h4>
        <p className="mb-2">
          Early 2021 I had put my 3d projects on hiatus for one year and a half
          because of my focus on freelancing. I especially had a very intense
          mission where I had a lot of lattitude (and pressure...) to build a
          sizeable webapp the best way possible.{" "}
        </p>
        <p className="mb-2">
          It made me grow a lot as an engineer, so when I looked back at my work
          on the{" "}
          <Link className="underline" href="/projects/webxr-city-builder">
            city editor
          </Link>{" "}
          I got inspired by what I managed to do, but also wanted to take a
          different direction both in the editor and on the technical side
        </p>
        <p>
          I got obsessed with full type safety from the database to the front
          end, avoiding CRUD boilerplate and relational databases as a single
          source of truth, hence the adoption of{" "}
          <a className="underline" href="https://hasura.io/">
            Hasura
          </a>
          ,{" "}
          <a className="underline" href="https://graphql.org/">
            GraphQL
          </a>{" "}
          and PostgreSQL.
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">What is it ?</h4>
        <p className="mb-2">
          In order to edit a space an user has to go through at most three
          steps.
        </p>
        <ul className="mb-8">
          <li className="mb-0.5">
            First they have to upload a 3D model of a an environment or select
            an existing one.
          </li>
          <li className="mb-0.5">
            Then they have to dropping and resizing an example avatar of a
            player in order to configure its size and the starting point of the
            space.
          </li>
          <li className="mb-0.5">
            Finally they can add virtual screens with text, videos, & pictures.
          </li>
        </ul>
        <figure className="mb-5">
          <video
            className="mb-2"
            // className="w-2/5"
            controls
            muted
            autoPlay
            loop
            src="/videos/reddit_flat.webm"
          ></video>
          <figcaption>
            <em>
              Top posts on{" "}
              <a
                className="underline"
                href="https://www.reddit.com/r/virtualreality"
              >
                r/virtualreality
              </a>
              . The in app Reddit browser is made with{" "}
              <a className="underline" href="https://pixijs.com/">
                PixiJS
              </a>{" "}
              and support rich content
            </em>
          </figcaption>
        </figure>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Outcome</h4>
        <p className="mb-1.5">
          I was unhappy with the text readability in VR. When a panel was more
          than a few meters away it was not crisp. Now content readability in VR
          became an obsession since I easily get obsessed by something not
          working as it should.
        </p>
        <p>
          To test my understanding of how to fix this issue that plagues a lot
          of WebXR applications, I decided to build an app that required
          readability to be perfect: a{" "}
          <Link className="underline" href="/projects/webxr-pdf-reader">
            WebXR PDF reader
          </Link>
          .
        </p>
      </section>
      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React, XState</li>
          <li>3D: Babylon.js</li>
          <li>2D: PixiJS</li>
          <li>Back: Node.js, PostgreSQL, Hasura, GraphQL</li>
          <li>
            Infrastructure: Google Cloud Platfrom, Cloud SQL, Cloud Run, Google
            Cloud Storage, Cloud Build, Terraform
          </li>
        </ul>
      </section>
    </section>
  );
}
