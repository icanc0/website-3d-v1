<script lang="ts">
	import type {blockConfig} from "$lib/index";
	import TestBlock from "$lib/TestBlock.svelte";

	export let configs: blockConfig[];
	$: console.log(configs);
</script>


{#each configs as config}
    <TestBlock
            rotation.x={config.rotation.x}
            rotation.y={config.rotation.y}
            position.y={config.position.y}
            position.x={config.position.x}
            config={config}
    >

    </TestBlock>

{/each}

