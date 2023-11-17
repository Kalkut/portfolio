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
    <DefaultEnvironment color="#d9f99d"/>
    <Model url="/models/desk.glb"
      // rotation={new Vector3(0, Math.PI / 2)}
    />
    <Entry
      preview="/pictures/loreal.jpeg"
      // position={new Vector3(0, 2, 2)}
      // rotation={new Vector3(0, 0, 0)}
    />
  </App>;
}
