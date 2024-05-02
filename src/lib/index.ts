// place files you want to import through the `$lib` alias in this folder.
import {type Color, Vector3} from "three";

export interface blockConfig {
	color?: Color;
	// emissive?: Color;
	scale?: number
	roughness?: number;
	metalness?: number;
	position: Vector3;
	rotation: Vector3;
}
