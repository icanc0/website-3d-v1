<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
	import {Debug, World} from "@threlte/rapier";
	import Renderer from "$lib/Renderer.svelte";

</script>

<Canvas rendererParameters={{logarithmicDepthBuffer: true}}>
    <World gravity={[0, 0, 0]} >
        <Renderer/>

        <Debug />
        <Scene />
    </World>
</Canvas>