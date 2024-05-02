<script lang="ts">
	import type {blockConfig} from "$lib/index";
	import TestBlock from "$lib/TestBlock.svelte";

	export let configs: blockConfig[];
</script>


{#each configs as config}
    <TestBlock
            rotation.x={config.rotation.x}
            position.y={config.position.y}
            config={config}
    >

    </TestBlock>

{/each}

