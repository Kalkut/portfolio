"use client"
import Image from 'next/image'
import { App } from './babylon/App';
import { Camera } from './babylon/Camera';
import { Lights } from './babylon/Lights';
import { DefaultEnvironment } from './babylon/DefaultEnvironment';
import { Model } from './babylon/Model';
import { Card } from './babylon/components/Card';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export default function Home() {

  return <App>
    <Camera />
    <Lights />
    <DefaultEnvironment color="#1e3a8a"/>
    <Model url="/models/desk.glb"
      rotation={new Vector3(0, Math.PI / 2)}
    />
    <Card
      type='video'
      title='NPC Dialog Editor'
      preview='/videos/dialog_editor.mp4'
      position={new Vector3(-2, 2, 2)}
    />
    <Card
      type='video'
      title='WebXR Space Editor'
      preview="/videos/environment.mp4"
      position={new Vector3(0, 2, 2)}
    />
    <Card
      type='video'
      title="Building Editor"
      preview="/videos/house_builder.mp4"
      position={new Vector3(2, 2, 2)}
    />
    <Card
      type='video'
      title='WebVR Environment Editor'
      preview='/videos/ground.mp4'
      position={new Vector3(-2.2, 3.25, 2)}
    />
    <Card
      type='image'
      title="Proto Social WebVR"
      preview="/pictures/social.jpg"
      position={new Vector3(0, 3.25, 2)}
    />
    <Card
      type='video'
      title="WebVR Reddit Browser"
      preview='/videos/reddit.mp4'
      position={new Vector3(2.2, 3.25, 2)}
    />
  </App>;
}
