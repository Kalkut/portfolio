export default function About() {
  return (
    <div className="pb-5 flex flex-col items-center">
      <section className="my-5">
        <figure className="mb-6 flex flex-col items-center">
          <img className="mb-2" src="/me.png" />
          <figcaption>
            <em>Hey you, welcome to my weird part of the web !</em>
          </figcaption>
        </figure>
      </section>
      <section className="mb-8">
        <h4 className="font-semibold mb-3">A bit about me</h4>
        <p className="mb-2">
          I am Bérenger, a France based fullstack web developer. I have
          professionaly worked as a web dev for 10 years but this site is about
          my personal interests and experiments, not about what I do for my
          customers/employers. You can contact me on{" "}
          <a className="underline" href="https://www.linkedin.com/in/beremaki">
            Linkedin
          </a>{" "}
          if you are interested in a professional colaboration
        </p>
      </section>
      <section>
        <h4 className="font-semibold mb-3">
          What's up with all the 3D and VR ?
        </h4>
        <p className="mb-2">
          I am intrigued by the idea of virtual reality since I was a kid. I
          never thought that the technology would be viable as soon as the early
          2010s though.
        </p>
        <p className="mb-2">
          Mid-2015, I was lucky enough to try a friend's Oculus DK2 and even
          though the tech was still experimental, it seemed to me there that was
          a good enough base for a new wave of VR software. I did not think much
          of it at first since I was just a junior web dev already trying his
          best to get good at his craft.
        </p>
        <p className="mb-2">
          In 2016 another friend of mine taught me about{" "}
          <a className="underline" href="https://aframe.io/">
            A-Frame
          </a>
          . Thanks to him I saw a path where I could reconcile my craft with my
          interest
        </p>
        <p className="mb-2">
          I developed the strong belief that 3D and immersive technologies were
          going to a be growing part of the web. I felt like even if only a few
          percent of the web ended up becoming tridimensional, I had to explore
          in what ways 3D and VR could change or integrate with the way we use
          the web.
        </p>
        <p className="mb-2">
          Since then I split my time between full stack developement work for
          customers and experimentation with the web immersive technologies
        </p>
      </section>
    </div>
  );
}
