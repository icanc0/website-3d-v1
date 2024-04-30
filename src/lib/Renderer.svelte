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

	const {size, scene, renderer, camera } = useThrelte();

	const composer = new EffectComposer(renderer);

	const setupEffectComposer = (camera: Camera) => {
		composer.removeAllPasses();

		composer.addPass(new RenderPass(scene, camera));

		const n8aopass = new N8AOPostPass(scene, camera, $size.width, $size.height);

		n8aopass.setQualityMode('Medium');
		n8aopass.setDisplayMode('Split AO');
		n8aopass.enableDebugMode();
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
	$: setupEffectComposer($camera);
	useTask((delta) => {
		composer.render(delta);
	});
</script>