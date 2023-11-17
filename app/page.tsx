"use client"
import Image from 'next/image'
import { App } from './babylon/App';
import { Camera } from './babylon/Camera';
import { Lights } from './babylon/Lights';
import { DefaultEnvironment } from './babylon/DefaultEnvironment';
import { Model } from './babylon/Model';
import { Entry } from './babylon/components/Entry';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export default function Home() {

  return <App>
    <Camera />
    <Lights />
    <DefaultEnvironment color="#1e3a8a"/>
    <Model url="/models/desk.glb"
      rotation={new Vector3(0, Math.PI / 2)}
    />
    <Entry
      type='video'
      preview='/videos/dialog_editor.mp4'
      position={new Vector3(-2, 2, 2)}
    />
    <Entry
      type='video'
      preview="/videos/environment.mp4"
      position={new Vector3(0, 2, 2)}
    />
    <Entry
      type='video'
      preview="/videos/house_builder.mp4"
      position={new Vector3(2, 2, 2)}
    />
    <Entry
      type='video'
      preview='/videos/ground.mp4'
      position={new Vector3(-2.2, 3.25, 2)}
    />
    <Entry
      type='image'
      preview="/pictures/social.jpg"
      position={new Vector3(0, 3.25, 2)}
    />
    <Entry
      type='video'
      preview='/videos/reddit.mp4'
      position={new Vector3(2.2, 3.25, 2)}
    />
  </App>;
}
