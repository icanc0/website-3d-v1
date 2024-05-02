<script>
    import { T } from '@threlte/core'
    import TestBlock from "$lib/TestBlock.svelte";
    import {Attractor} from "@threlte/rapier";
    import Pointer from "$lib/Pointer.svelte";
    import {RoundedBoxGeometry} from "@threlte/extras";

</script>

<T.PerspectiveCamera
        fov={17.5}
        near={1}
        far={20}
        makeDefault
        position={[0, 0, 15]}
        on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>
<!--<T.DirectionalLight position={[10, 10, 10]}  intensity={1} castShadow />-->

<T.Group rotation={[Math.PI / 3, 0, 1]}>
    <T.SpotLight position={[10, 10, 10]}  intensity={400} castShadow={true} penumbra={1} angle={0.15}/>

    <T.SpotLight position={[0, 5, -9]}  intensity={50} castShadow={true}/>
    <T.SpotLight position={[-5, 1, -1]} intensity={50} castShadow={true}/>
    <T.SpotLight position={[-5, -1, -1]} intensity={50} castShadow={true}/>
    <T.SpotLight position={[10, 1, 0]} intensity={50} castShadow={true}/>
</T.Group>

<T.AmbientLight intensity={0.8}  />

<TestBlock position.x={-1} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="white" roughness={0.2}/>
<TestBlock position.y={3} position.x={2} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="white" roughness={0.2}/>
<TestBlock position.y={3} position.x={-1} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="white" roughness={0.1}/>
<TestBlock position.y={1} position.x={4} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="white" roughness={0.1}/>
<TestBlock position.y={1} position.x={2} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="white" roughness={1}/>

<TestBlock position.x={-2} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="#444" roughness={0}/>
<TestBlock position.x={-3} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="hotpink" roughness={0}/>
<TestBlock position.y={-1} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="hotpink" roughness={0}/>
<TestBlock position.y={-2} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="hotpink" roughness={0}/>
<TestBlock position.y={-3} scale={1} rotation.y={Math.PI / 3} rotation.x={Math.PI / 3} color="hotpink" roughness={1}/>

<Pointer></Pointer>

<Attractor
        range={1000}
        strength={2}
        position={[0, 0, 0]}

/>

