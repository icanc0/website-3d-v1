<script lang="ts">
    import {T} from "@threlte/core";
	import {type blockConfig, colorIndex, colors, PointerRef} from "$lib/index";
	import TestBlock from "$lib/TestBlock.svelte";
	import {interactivity} from "@threlte/extras";
	import {RigidBody as RapierRigidBody} from "@dimforge/rapier3d-compat";

	export let configs: blockConfig[];
	$: console.log(configs);

	let refs: RapierRigidBody[] = []; //refs to all the blocks so we can apply foces to them

	interactivity()

</script>

<T.Mesh
    visible={false}
    on:pointerdown={(e) => {
        colorIndex.set(($colorIndex + 1) % colors.length)
        refs.forEach((ref) => {
            ref.setAngvel({
              x: (Math.random() * 20) - 10,
              y: (Math.random() * 20) - 10,
              z: (Math.random() * 20) - 10
            }, true);

            ref.setLinvel({
              x: (Math.random() * 40) - 20,
              y: (Math.random() * 40) - 20,
              z: (Math.random() * 40) - 20
            }, true);
        })
    }}
>

    <T.BoxGeometry args={[20, 20, 0.1]} />
    <T.MeshBasicMaterial />
</T.Mesh>


{#each configs as config, i}
    <TestBlock
            rotation.x={config.rotation.x}
            rotation.y={config.rotation.y}
            position.y={config.position.y}
            position.x={config.position.x}
            config={config}
            bind:rigidRef={refs[i]}
    >

    </TestBlock>

{/each}

