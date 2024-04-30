<script lang="ts">

	import {T, useTask, useThrelte} from '@threlte/core';
	import {Collider, RigidBody} from "@threlte/rapier";
	import {Group} from "three";
	import {onMount} from "svelte";

	let RigidRef: RigidBody

	interface MousePosition {
		x: number;
		y: number;
	}

    let mouse: MousePosition = {x:0,y:0}

    onMount(() => {
        console.log('mounted')
		document.addEventListener('mousemove', (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		});
    })

    const { size } = useThrelte()


    useTask((delta) => {
		let { x, y }= {x: mouse.x - ($size.width/2), y: mouse.y - ($size.height/2)}
		RigidRef.setNextKinematicTranslation({x: x/50, y: -y/50, z: 0})
        // console.log('mouse', mouse)
        // console.log($size)
    })


	$: console.log(RigidRef!)
</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div  >

</div>

<T.Group >
    <RigidBody type="kinematicPosition" bind:rigidBody={RigidRef}>
        <Collider shape="ball" args={[1]} mass={0.01}>

        </Collider>
    </RigidBody>

</T.Group>