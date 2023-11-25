import { Project } from "../types";

const content: Project = {
  name: "Social WebVR Experiment",
  date: "2016",
  status: "Discontinued",
  media: {
    type: "img",
    src: "/social_webvr_experiment/building.mp4",
  },
  context: `
    I always was fascinated by the idea of virtual reality even from a very young age. I never thought that the technology would be viable as soon as the early 2010s though.
    Mid-2015, I was lucky enough to try a friend's Oculus DK2 and even though the tech was still experimental, it seemed to me there that was a good enough base for a new wave of VR software.
    I did not think much of it at first since I was an just a junior web dev already trying his best to get good at his craft. In 2016 another friend of mine taught me about A-Frame,
    as soon as I tried it I knew that this was a career defining moment.

    I knew that 3D and VR were going to be growing part of the web. I felt like even if something like 10% of the web became tridimensional,I needed to explore in what ways 3D/VR could change
    how we use the web. My first idea was an app where multiple users could spend time together, create an environment and share medias (like YouTube videos).
  `,
  description: `...
  `,
  stack: [
    "Frontend: React, A-Frame/Three.js, WebSockets",
    "Backend: Node.js, Redis, Mongo",
    "Cloud Provider: Google Cloud Platform",
  ],
};

export default content;
