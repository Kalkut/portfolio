import Link from "next/link";

export default function SpatialReddit() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-semibold">Spatial Reddit</h2>
      <h3 className="italic mb-6">2018 - Discontinued</h3>
      <video
        className="mb-4"
        src="/videos/reddit/reddit_inside.mp4"
        controls
        muted
        autoPlay
        loop
      />

      <section className="mb-5">
        <section>
          <h4 className="font-semibold mb-3">Context</h4>
          <p className="mb-1.5">
            <span>
              The goal was to explore ways of using 3D to visualize data, and
              also I actually like browsing Reddit
            </span>
          </p>
        </section>
        <section>
          <h4 className="font-semibold mb-3">Concept</h4>
          <p className="mb-1.5">
            In this experiment a subreddit posts are display as boxes
            dispersered in a 3D space in the following way
          </p>
          <ul className="mb-1.5">
            <li>The higher you go the most upvoted it is</li>
            <li>When you go forward you go further in time</li>
            <li>When you go right it is more commented</li>
          </ul>
          <p className="mb-1.5">
            Clicking or entering the boxes lets the user browse a specific post
            in more details
          </p>

          <video
            className="my-8"
            // className="w-2/5"
            controls
            muted
            autoPlay
            loop
            src="/videos/reddit/reddit_navigation.mp4"
          ></video>
        </section>
        <section className="mb-5">
          <h4 className="font-semibold mb-3">Outcome</h4>
          <p className="mb-6">
            The reception of this proof of concept{" "}
            <a
              className="underline"
              href="https://www.reddit.com/r/virtualreality/comments/aim6z4/reddit_in_vr_browsing_rvirtualreality_cyberspace/"
            >
              has been mixed on Reddit
            </a>
            .{" "}
            <a
              className="underline"
              href="https://www.reddit.com/r/virtualreality/comments/aim6z4/comment/eeovs6f/?utm_source=share&utm_medium=web2x&context=3"
            >
              I had to give more explanation about why I was even showing this
              very rough tech demo
            </a>
          </p>

          <blockquote className="mb-6 text-gray-600 bg-white/40 italic p-4">
            <p className="mb-3">
              I did this proof of concept six month ago and I expected such
              reactions this is why I dropped this project and worked on a 3D
              game engine for non programmers instead.
            </p>
            <p>
              I still think that it is interesting : moving around would have
              been optional since I would also have added a menu and a 3D space
              would have allowed multiple people to share stuff there (by
              grabbing content) like another poster said.
            </p>
          </blockquote>

          <p className="mb-6">
            With more context about what I was experimenting with this project,
            I found that people were much more understanding of my endeavor
          </p>

          <blockquote className="mb-6 text-gray-600 bg-white/40 italic p-4">
            <p className="mb-1.5">
              Interesting idea. It feels like it could be made useful even
              outside of VR. Except instead of flying into the thread/comment,
              you just click on the dot to jump to the link. If you hover on the
              data point, it shows you a thumbnail of the thread or the post.
            </p>

            <p>That 3 axis sorting of content could legitimately be useful.</p>
          </blockquote>

          <blockquote className="mb-6 text-gray-600 bg-white/40 italic p-4">
            <p className="mb-1.5">
              I think it's a great idea that just needs to be polished more.
            </p>
          </blockquote>

          <p>
            The point of this kind of project is hard to get across because it
            is not meant to be a product. It is a way for me as a creator to
            challenge the assumptions I have about a problem/topic. The takeaway
            from this are quite hard to share, but I felt like it was still
            better to show what I made.
          </p>
        </section>
      </section>

      <section className="mb-5">
        <h4 className="font-semibold mb-3">Technical stack</h4>
        <ul>
          <li>Front: React</li>
          <li>3D: A-Frame, Three.js</li>
        </ul>
      </section>
    </section>
  );
}
