<script lang="ts">
    import { T } from '@threlte/core'
    import {Attractor} from "@threlte/rapier";
    import Pointer from "$lib/Pointer.svelte";
    import type {blockConfig} from "$lib/index";
	import {Color, Vector3} from "three";
	import BlockGroup from "$lib/BlockGroup.svelte";

	import {colorIndex, colors} from "$lib/index";

	let blocks: (index: number) => blockConfig[]

	blocks = (index = 0) => {
		return [
			{ position: new Vector3(-1, 0, 0), color: new Color("white"), metalness: 0, roughness: 0.2, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(2, 3, 0), color: new Color("white"), metalness: 0, roughness: 0.2, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(2, 3, 0), color: new Color("white"), metalness: 0, roughness: 0.1, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(2, 1, 0), color: new Color("white"), metalness: 0, roughness: 0.1, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(2, 1, 0), color: new Color("white"), metalness: 0, roughness: 1, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(-2, 0, 0), color: new Color("#444"), metalness: 0, roughness: 0, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(-2, 0, 0), color: new Color(colors[index]), metalness: 0, roughness: 0, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(0, -1, 0), color: new Color(colors[index]), metalness: 0, roughness: 0, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(0, -1, 0), color: new Color(colors[index]), metalness: 0, roughness: 0, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) },
			{ position: new Vector3(0, -1, 0), color: new Color(colors[index]), metalness: 0, roughness: 1, scale: 1, rotation: new Vector3(Math.PI / 3, Math.PI / 3, 0) }
		];
	};

</script>

<T.PerspectiveCamera
        fov={17.5}
        near={1}
        far={20}
        makeDefault
        position={[0, 0, 15]}
        on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>
<!--<T.DirectionalLight position={[10, 10, 10]}  intensity={1} castShadow />-->

<T.Group rotation={[Math.PI / 3, 0, 1]}>
    <T.SpotLight position={[10, 10, 10]}  intensity={400} castShadow={true} penumbra={1} angle={0.15}/>

    <T.SpotLight position={[0, 5, -9]}  intensity={50} castShadow={true}/>
    <T.SpotLight position={[-5, 1, -1]} intensity={50} castShadow={true}/>
    <T.SpotLight position={[-5, -1, -1]} intensity={50} castShadow={true}/>
    <T.SpotLight position={[10, 1, 0]} intensity={50} castShadow={true}/>
</T.Group>

<T.AmbientLight intensity={0.8}  />

<BlockGroup configs={blocks($colorIndex)} />

<Pointer></Pointer>

<Attractor
        range={1000}
        strength={2}
        position={[0, 0, 0]}
/>

