"use client";

import { Canvas } from "./Canvas";
import { Camera } from "./Camera";
import { Lights } from "./Lights";
import { DefaultEnvironment } from "./DefaultEnvironment";
import { Model } from "./Model";
import { Card } from "./Card";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Background } from "./Background";
import { Panel } from "./Panel";

export default function Office() {
  return (
    <Canvas>
      <Camera />
      <Lights />
      <Background color="#425c87" />
      <DefaultEnvironment color="#1e3a8a">
        <Model url="/models/desk.glb" rotation={new Vector3(0, Math.PI / 2)} />
        <Panel
          title="2016"
          width={2}
          height={1.75}
          rotation={new Vector3(0, -Math.PI / 4)}
          position={new Vector3(-1.2, 1.05, -0.25)}
        >
          <Card
            type="video"
            title="Social WebVR Experiment"
            href="/projects/social-webvr-experiment"
            preview="/videos/social_webvr_experiment/multiplayer.mp4"
            position={new Vector3(0, -0.15, 0)}
          />
        </Panel>
        <Panel
          title="2017"
          width={4.5}
          height={1.75}
          rotation={new Vector3(Math.PI / 12, -Math.PI / 8)}
          position={new Vector3(-0.75, 1.05, -0.2)}
        >
          <Card
            type="video"
            title="YouTube/Facebook WebVR Browser"
            preview="/videos/browser/navigation.mp4"
            href="/projects/youtube-facebook-webvr-browser"
            position={new Vector3(-1.25, -0.15, 0)}
          />

          <Card
            type="image"
            title="Proto Social WebVR"
            preview="/pictures/social.jpg"
            href="/projects/social-webvr-proto"
            position={new Vector3(1, -0.15, 0)}
          />
        </Panel>
        <Panel
          title="2018"
          width={4}
          height={1.75}
          rotation={new Vector3(Math.PI / 12, Math.PI / 8)}
          position={new Vector3(0.5, 1.05, 0)}
        >
          <Card
            type="video"
            title="Tiled WebVR World Editor"
            preview="/videos/ground.mp4"
            href="/projects/tiled-world-editor"
            position={new Vector3(-1, -0.15, 0)}
          />
          <Card
            type="video"
            title="Spatial Reddit"
            preview="/videos/reddit/reddit_inside.mp4"
            href="/projects/spatial-reddit"
            position={new Vector3(1, -0.15, 0)}
          />
        </Panel>
        <Panel
          title="2019"
          width={6}
          height={1.75}
          rotation={new Vector3(Math.PI / 12, Math.PI / 5)}
          position={new Vector3(1, 1.05, -0.3)}
        >
          <Card
            type="video"
            title="WebxR City Builder"
            preview="/videos/world/world_edition.mp4"
            href="/projects/webxr-city-builder"
            position={new Vector3(-2, -0.15, 0)}
          />
          <Card
            type="video"
            title="NPC Editor"
            href="/projects/npc-editor"
            preview="/videos/npc/dialog_editor.mp4"
            position={new Vector3(0, -0.15, 0)}
          />
          <Card
            type="video"
            title="Building Editor"
            href="/projects/building-editor"
            preview="/videos/house_builder.mp4"
            position={new Vector3(2, -0.15, 0)}
          />
        </Panel>

        <Panel
          title="2021"
          width={3.5}
          height={1.75}
          rotation={new Vector3((0.75 * Math.PI) / 2)}
          position={new Vector3(-0.1, 1, -0.45)}
        >
          <Card
            type="video"
            title="WebXR Space Editor"
            preview="/videos/environment.mp4"
            href="/projects/webxr-space-editor"
            position={new Vector3(-0.65, -0.15, 0)}
          />
          <Card
            type="video"
            title="WebXR PDF Reader"
            preview="/videos/pdf_reader.mp4"
            href="/projects/webxr-pdf-reader"
            position={new Vector3(1, -0.15, 0)}
          />
        </Panel>

        <Panel
          title="2022"
          width={2}
          height={1.75}
          position={new Vector3(-0.075, 1.275, 0.25)}
        >
          <Card
            type="video"
            title="Google Drive WebXR Client"
            href="/projects/webxr-google-drive-client"
            preview="/videos/google_drive_client.mp4"
            position={new Vector3(0, -0.15, 0)}
          />
        </Panel>
      </DefaultEnvironment>
    </Canvas>
  );
}
