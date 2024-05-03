<script lang="ts">
	import {T, useTask, useThrelte} from '@threlte/core';
	import {Collider, RigidBody} from "@threlte/rapier";
	import {Group} from "three";
	import {interactivity} from "@threlte/extras";
	import { colorIndex} from "$lib/index";
	import {colors} from "$lib/index";

	let RigidRef: RigidBody

	interactivity()

</script>

<T.Group >
    <RigidBody type="kinematicPosition" bind:rigidBody={RigidRef}>
        <Collider shape="ball" args={[0.5]} mass={0.01}>

        </Collider>
    </RigidBody>
</T.Group>

<T.Mesh
    visible={false}
    on:pointermove={(e) => RigidRef.setNextKinematicTranslation({x: e.point.x, y: e.point.y, z: 0})}
    on:pointerdown={(e) => colorIndex.set(($colorIndex + 1) % colors.length)}
>

    <T.BoxGeometry args={[20, 20, 0.1]} />
    <T.MeshBasicMaterial />
</T.Mesh>