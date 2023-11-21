import CircuitSketch from "./Cirtcuit/CircuitSketch";
import FlockSketch from "./Flock/FlockSketch";
import FractalSketch from "./Fractal/FractalSketch";

import flockImage from "../images/flock_thumb.png";
import fractalImage from "../images/fractal_thumb.png";

export interface Sketch {
	imageUrl: string;
	title: string;
	description: string;
	sourceCode: string;
	colors: string[];
	sketchComponent?: () => JSX.Element;
}

export const sketches: Sketch[] = [
	{
		title: "Flock",
		description:
			'A simple simulation system for flocking agents (Boids)  refer to this <a style="font-weight: 800; text-decoration: underline;" href="https://www.red3d.com/cwr/boids/" target="_blank">paper</a> (by Craig Reynolds) for more details',
		imageUrl: flockImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Fractal/sketch.ts",
		colors: ["rgba(150, 51, 12, 0.5)", "rgba(10, 10, 10, 0.2)"],
	},
	{
		title: "Fractal",
		description:
			'A simple generator for the <a style="font-weight: 800; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Koch_snowflake" target="_blank">Koch snowflake curve</a> and other fractals',
		imageUrl: fractalImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Flock/sketch.ts",
		colors: ["rgba(58, 137, 25, 0.2)", "rgba(0, 89, 20, 0.5)"],
	},
];
