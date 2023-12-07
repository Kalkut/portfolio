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
          position={new Vector3(-1.5, 7, 2)}
        >
          <Card
            type="video"
            title="Social WebVR Experiment"
            preview="/videos/social_webvr_experiment/multiplayer.mp4"
            position={new Vector3(0, -0.15, 0)}
          />
        </Panel>
        <Panel
          title="2017"
          width={4.5}
          height={1.75}
          position={new Vector3(2, 7, 2)}
        >
          <Card
            type="video"
            title="YouTube/Facebook WebVR Browser"
            preview="/videos/browser/navigation.mp4"
            position={new Vector3(-1.25, -0.15, 0)}
          />

          <Card
            type="image"
            title="Proto Social WebVR"
            preview="/pictures/social.jpg"
            position={new Vector3(1, -0.15, 0)}
          />
        </Panel>
        <Panel
          title="2018"
          width={4}
          height={1.75}
          position={new Vector3(-0.5, 5, 2)}
        >
          <Card
            type="video"
            title="Tiled WebVR World Editor"
            preview="/videos/ground.mp4"
            position={new Vector3(-1, -0.15, 0)}
          />
          <Card
            type="video"
            title="Spatial Reddit"
            preview="/videos/reddit/reddit_inside.mp4"
            position={new Vector3(1, -0.15, 0)}
          />
        </Panel>
        <Panel
          title="2019"
          width={6}
          height={1.75}
          position={new Vector3(4.75, 5, 2)}
        >
          <Card
            type="video"
            title="WebxR City Builder"
            preview="/videos/world/world_edition.mp4"
            position={new Vector3(-2, -0.15, 0)}
          />
          <Card
            type="video"
            title="NPC Editor"
            preview="/videos/npc/dialog_editor.mp4"
            position={new Vector3(0, -0.15, 0)}
          />
          <Card
            type="video"
            title="Building Editor"
            preview="/videos/house_builder.mp4"
            position={new Vector3(2, -0.15, 0)}
          />
        </Panel>

        <Panel
          title="2021"
          width={3.5}
          height={1.75}
          position={new Vector3(-0.25, 3, 2)}
        >
          <Card
            type="video"
            title="WebXR Space Editor"
            preview="/videos/environment.mp4"
            position={new Vector3(-0.65, -0.15, 0)}
          />
          <Card
            type="video"
            title="WebXR PDF Reader"
            preview="/videos/pdf_reader.mp4"
            position={new Vector3(1, -0.15, 0)}
          />
        </Panel>

        <Panel
          title="2022"
          width={2}
          height={1.75}
          position={new Vector3(3, 3, 2)}
        >
          <Card
            type="video"
            title="Google Drive WebXR Client"
            preview="/videos/google_drive_client.mp4"
            position={new Vector3(0, -0.15, 0)}
          />
        </Panel>

        {/* <Card
          type="video"
          title="WebVR World Editor"
          preview="/videos/world/world_edition.mp4"
          position={new Vector3(-2, 4.5, 2)}
        />
        <Card
          type="video"
          title="Youtube/Facebook WebVR browser"
          preview="/videos/browser/navigation.mp4"
          position={new Vector3(0, 4.5, 2)}
        />
        <Card
          type="video"
          title="Google Drive WebXR Client"
          preview="/videos/google_drive_client.mp4"
          position={new Vector3(2, 4.5, 2)}
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
          preview="/videos/reddit/reddit_inside.mp4"
          position={new Vector3(2.2, 3.25, 2)}
        />
        <Card
          type="video"
          title="NPC Dialog Editor"
          preview="/videos/pdf_reader.mp4"
          position={new Vector3(-4, 2, 2)}
        />
        <Card
          type="video"
          title="NPC Dialog Editor"
          preview="/videos/npc/dialog_editor.mp4"
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
          title="Building Editor"
          preview="/videos/reddit_flat.webm"
          position={new Vector3(4, 2, 2)}
        /> */}
      </DefaultEnvironment>
    </Canvas>
  );
}
