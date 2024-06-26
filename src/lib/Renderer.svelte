<script lang="ts">
	import {useThrelte, useTask} from '@threlte/core';
	import { N8AOPostPass } from 'n8ao';

	import {
		EffectComposer,
		EffectPass,
		RenderPass,
		SMAAEffect,
		SMAAPreset,
	} from 'postprocessing';
	import {type Camera, Color} from 'three';
	import {onMount} from "svelte";

	const {size, scene, renderer, camera } = useThrelte();

	const composer = new EffectComposer(renderer);

	const setupEffectComposer = (camera: Camera) => {
		composer.removeAllPasses();

		composer.addPass(new RenderPass(scene, camera));

		const n8aopass = new N8AOPostPass(scene, camera, $size.width, $size.height);
        n8aopass.configuration.aoSamples = 8;
		n8aopass.configuration.aoRadius = 1.0;
		n8aopass.configuration.distanceFalloff = 1.0;
		n8aopass.configuration.intensity = 4;

		composer.addPass(n8aopass);
		composer.addPass(
			new EffectPass(
				camera,
				new SMAAEffect({
					preset: SMAAPreset.HIGH
				})
			)
		);
	};
	// We need to set up the passes according to the camera in use
	$: setupEffectComposer($camera)
	$: composer.setSize($size.width, $size.height)
	const { renderStage, autoRender } = useThrelte()
	// We need to disable auto rendering as soon as this component is
	// mounted and restore the previous state when it is unmounted.
	onMount(() => {
		let before = autoRender.current
		autoRender.set(false)
		return () => autoRender.set(before)
	})
	useTask((delta) => {
		composer.render(delta)
	}, { stage: renderStage, autoInvalidate: false })
</script>
