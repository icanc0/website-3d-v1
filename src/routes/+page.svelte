<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '../lib/Scene.svelte'
	import {Debug, World} from "@threlte/rapier";
	import Renderer from "$lib/Renderer.svelte";

</script>
<div class="h-full flex flex-col space-y-10">
    <div class="flex flex-row space-x-20">
        <div class="text-5xl text-gray-800 font-bold">
            uwrl
        </div>
        <div class="text-3xl text-gray-800">
            Researching, experimenting, and building. We create real-life interfaces for the virtual world.

        </div>
        <div>
            <div class="bg-gray-800 rounded-full px-4 py-2">
                <div class="text-2xl text-gray-100 text-nowrap">
                    DISCOVER MORE
                </div>
            </div>

        </div>
    </div>
    <div class="grow overflow-hidden rounded-2xl border-2 bg-gray-800">
        <Canvas rendererParameters={{logarithmicDepthBuffer: true}}>
            <World gravity={[0, 0, 0]} >
                <Renderer/>

                        <Debug />
                <Scene />
            </World>
        </Canvas>
    </div>


</div>
