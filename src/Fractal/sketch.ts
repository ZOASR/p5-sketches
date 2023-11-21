import Fractal from "./fractal";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";

export type FractalSketchProps = SketchProps & {
	rotation: number;
	iterations: number;
}

export function sketch(p: P5CanvasInstance<FractalSketchProps>) {
	let fractal1: Fractal;
	let fractal2: Fractal;
	let angle: number = 30;
	let numberOfIterations: number = 0;
	const canvasWrapper: HTMLElement | null = document.getElementById("canvas-wrapper");
	let wrapperWidth: number;
	let wrapperHeight: number;
	if (canvasWrapper) {
		const wrapperComputedStyle: CSSStyleDeclaration = window.getComputedStyle(canvasWrapper, null);
		wrapperWidth = canvasWrapper?.clientWidth;
		wrapperWidth -=
			parseFloat(wrapperComputedStyle.paddingLeft) +
			parseFloat(wrapperComputedStyle.paddingRight);
		wrapperHeight = canvasWrapper?.clientHeight;
		wrapperHeight -=
			parseFloat(wrapperComputedStyle.paddingTop) +
			parseFloat(wrapperComputedStyle.paddingBottom);
	}

	p.updateWithProps = (props: FractalSketchProps) => {
		angle = props?.rotation;
		numberOfIterations = props?.iterations;
	};

	p.setup = () => {
		p.createCanvas(wrapperWidth, wrapperHeight);
		// console.log(angleSlider);
		fractal1 = new Fractal(
			p.width / 2 - p.width / 4,
			p.height / 2,
			p.width / 2,
			angle,
			p
		);
		fractal2 = new Fractal(
			p.width / 2 - p.width / 4,
			p.height / 2,
			p.width / 2,
			360 - angle,
			p
		);
	};
	p.windowResized = () => {
		if (canvasWrapper) {
			const wrapperComputedStyle: CSSStyleDeclaration =
				window.getComputedStyle(canvasWrapper, null);
			wrapperWidth = canvasWrapper?.clientWidth;
			wrapperWidth -=
				parseFloat(wrapperComputedStyle.paddingLeft) +
				parseFloat(wrapperComputedStyle.paddingRight);
			wrapperHeight = canvasWrapper?.clientHeight;
			wrapperHeight -=
				parseFloat(wrapperComputedStyle.paddingTop) +
				parseFloat(wrapperComputedStyle.paddingBottom);
		}
		fractal1 = new Fractal(
			p.width / 2 - p.width / 4,
			p.height / 2,
			p.width / 2,
			angle,
			p
		);
		fractal2 = new Fractal(
			p.width / 2 - p.width / 4,
			p.height / 2,
			p.width / 2,
			360 - angle,
			p
		);
		p.resizeCanvas(wrapperWidth, wrapperHeight);
	};

	p.draw = () => {
		p.background(0, 51, 12);
		p.push();
		p.strokeWeight(0);
		p.fill(100, 200, 34);
		p.pop();
		fractal1.updateAngle(angle);
		fractal2.updateAngle(360 - angle);
		for (let i = 0; i < numberOfIterations; i++) {
			fractal1.nextLevel();
			fractal2.nextLevel();
		}
		fractal1.show();
		fractal2.show();
		fractal1.restart();
		fractal2.restart();
	};
}
