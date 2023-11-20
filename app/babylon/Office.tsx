"use client";
import { Canvas } from "./Canvas";
import { Camera } from "./Camera";
import { Lights } from "./Lights";
import { DefaultEnvironment } from "./DefaultEnvironment";
import { Model } from "./Model";
import { Card } from "./Card";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Background } from "./Background";

export default function Office() {
  return (
    <Canvas>
      <Camera />
      <Lights />
      <Background color="#425c87" />
      <DefaultEnvironment color="#1e3a8a">
        <Model url="/models/desk.glb" rotation={new Vector3(0, Math.PI / 2)} />
        <Card
          type="video"
          title="NPC Dialog Editor"
          preview="/videos/dialog_editor.mp4"
          position={new Vector3(-2, 2, 2)}
        />
        <Card
          type="video"
          title="WebXR Space Editor"
          preview="/videos/environment.mp4"
          position={new Vector3(0, 2, 2)}
        />
        <Card
          type="video"
          title="Building Editor"
          preview="/videos/house_builder.mp4"
          position={new Vector3(2, 2, 2)}
        />
        <Card
          type="video"
          title="WebVR Environment Editor"
          preview="/videos/ground.mp4"
          position={new Vector3(-2.2, 3.25, 2)}
        />
        <Card
          type="image"
          title="Proto Social WebVR"
          preview="/pictures/social.jpg"
          position={new Vector3(0, 3.25, 2)}
        />
        <Card
          type="video"
          title="WebVR Reddit Browser"
          preview="/videos/reddit.mp4"
          position={new Vector3(2.2, 3.25, 2)}
        />
      </DefaultEnvironment>
    </Canvas>
  );
}
