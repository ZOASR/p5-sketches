export interface Sketch {
	imageUrl: string;
	title: string;
	description: string;
	sourceCode: string;
}

export const sketches: Sketch[] = [
	{
		title: "Flock",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
		imageUrl: "../../../public/images/flock_thumb.png",
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Fractal/sketch.ts",
	},
	{
		title: "Fractal",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
		imageUrl: "../../../public/images/fractal_thumb.png",
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Flock/sketch.ts",
	},
];
