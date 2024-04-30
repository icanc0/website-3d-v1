<script>
    import { T } from '@threlte/core'
    import TestBlock from "$lib/TestBlock.svelte";
    import {Attractor} from "@threlte/rapier";
    import Pointer from "$lib/Pointer.svelte";

</script>

<T.PerspectiveCamera
        makeDefault
        position={[0, 0, 15]}
        on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>
<T.DirectionalLight position={[10, 10, 10]}  intensity={1} castShadow />

<T.Group rotation={[Math.PI / 3, 0, 1]}>
    <T.SpotLight position={[0, 5, -9]}  intensity={100} angle={Math.PI/2} castShadow/>
    <T.SpotLight position={[-5, 1, -1]} intensity={100} castShadow/>
    <T.SpotLight position={[-5, -1, -1]} intensity={100} castShadow/>
    <T.SpotLight position={[10, 1, 0]} intensity={100} castShadow/>
</T.Group>

<T.AmbientLight intensity={0.5}  />

<TestBlock position.x={-1} scale={2} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3}/>
<TestBlock position.x={-2} scale={2} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3}/>
<TestBlock position.x={-3} scale={2} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3}/>
<TestBlock position.y={-1} scale={2} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3}/>
<TestBlock position.y={-2} scale={2} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3}/>
<TestBlock position.y={-3} scale={2} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3}/>

<Pointer></Pointer>

<Attractor
        range={1000}
        strength={50}
        position={[0, 0, 0]}

/>