// place files you want to import through the `$lib` alias in this folder.
import {type Color, Vector3} from "three";
import {writable} from "svelte/store";

export interface blockConfig {
	color?: Color;
	// emissive?: Color;
	scale?: number
	roughness?: number;
	metalness?: number;
	position: Vector3;
	rotation: Vector3;
}

export let colorIndex = writable(0);
export let colors = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00'];

