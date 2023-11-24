import { LazyExoticComponent, lazy } from "react";

const CircuitSketch = lazy(() => import("./Cirtcuit/CircuitSketch"));
const FlockSketch = lazy(() => import("./Flock/FlockSketch"));
const FractalSketch = lazy(() => import("./Fractal/FractalSketch"));
const GoldenRatioSketch = lazy(() => import("./GoldenRatio/GoldenRatioSketch"));
const BlobSketch = lazy(() => import("./Blob/BlobSketch"));

import flockImage from "../images/flock_thumb.png";
import fractalImage from "../images/fractal_thumb.png";
import circuitImage from "../images/circuit_thumb.png";
import goldenImage from "../images/golden_thumb.png";
import bLobImage from "../images/blob_thumb.gif";
export interface Sketch {
	imageUrl: string;
	title: string;
	description: string;
	sourceCode: string;
	colors: string[];
	sketchComponent?: LazyExoticComponent<() => JSX.Element>;
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
		sketchComponent: FlockSketch,
	},
	{
		title: "Fractal",
		description:
			'A simple generator for the <a style="font-weight: 800; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Koch_snowflake" target="_blank">Koch snowflake curve</a> and other fractals',
		imageUrl: fractalImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Flock/sketch.ts",
		colors: ["rgba(58, 137, 25, 0.2)", "rgba(0, 89, 20, 0.5)"],
		sketchComponent: FractalSketch,
	},
	{
		title: "Golden Ratio",
		description:
			'Simulating the formation of a flower using the golden ratio and other custom numbers, check this <a style="font-weight: 800; text-decoration: underline;" href="https://www.youtube.com/watch?v=sj8Sg8qnjOg" target="_blank">numberphile video</a> for more amazing detail!',
		imageUrl: goldenImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/GoldenRatio/sketch.ts",
		colors: ["rgba(204, 187, 100, 0.2)", "rgba(126, 117, 62, 0.5)"],
		sketchComponent: GoldenRatioSketch,
	},
	{
		title: "Circuit",
		description: "Animated PCB-like traces",
		imageUrl: circuitImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Circuit/sketch.ts",
		colors: ["rgba(0, 150, 0, 0.2)", "rgba(0, 53, 0, 0.5)"],
		sketchComponent: CircuitSketch,
	},
	{
		title: "Dancing Blob",
		description: "A soothing dancing blob 🐡",
		imageUrl: bLobImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Blob/sketch.ts",
		colors: ["rgba(0, 0, 150, 0.5)", "rgba(50, 0, 0, 0.5)"],
		sketchComponent: BlobSketch,
	},
];
