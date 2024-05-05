<script lang="ts">
	import {forwardEventHandlers, T} from '@threlte/core';
	import {Collider, RigidBody} from "@threlte/rapier";
	import {Group} from "three";
	import {interactivity} from "@threlte/extras";
	import {colorIndex, PointerRef} from "$lib/index";
	import {colors} from "$lib/index";

	const component = forwardEventHandlers();

	interactivity()

</script>

<T.Group bind:this={$component} >

    <RigidBody type="kinematicPosition" bind:rigidBody={$PointerRef} >
        <Collider shape="ball" args={[0.5]} mass={0.01}>

        </Collider>
    </RigidBody>
</T.Group>

<T.Mesh
        visible={false}
        on:pointermove={(e) => $PointerRef.setNextKinematicTranslation({x: e.point.x, y: e.point.y, z: 0})}
>

    <T.BoxGeometry args={[20, 20, 0.1]} />
    <T.MeshBasicMaterial />
</T.Mesh>