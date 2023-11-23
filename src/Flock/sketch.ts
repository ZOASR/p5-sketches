import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import Boid from "./Boid";
import p5 from "p5";

export type FlockSketchProps = SketchProps & {
	a: number;
	c: number;
	s: number;
};

export function sketch(p: P5CanvasInstance<FlockSketchProps>) {
	const flock: Boid[] = [];

	let alignment: number = 0;
	let cohesion: number = 0;
	let separation: number = 0;

	let a = 0;

	p.setup = () => {
		p.createCanvas(innerWidth * 0.5, innerHeight * 0.5);

		for (let i = 0; i < 200; i++) {
			flock.push(
				new Boid(
					p5.prototype.random(p.width),
					p5.prototype.random(p.height),
					p
				)
			);
		}
	};

	p.updateWithProps = ({ a, c, s }: FlockSketchProps) => {
		alignment = a;
		cohesion = c;
		separation = s;
	};

	p.windowResized = () => {
		if (innerWidth < 786)
			p.resizeCanvas(innerWidth * 0.8, innerHeight * 0.5);
		else p.resizeCanvas(innerWidth * 0.5, innerHeight * 0.5);
	};

	p.draw = () => {
		p.background(0);

		p.textAlign(p5.prototype.CENTER);
		p.textSize(20);
		p.fill(255);
		p.noStroke();

		for (const f of flock) {
			//f.follow(random(width), random(height));
			f.flock(flock, alignment, cohesion, separation);
			f.update();
			f.show();
			f.edges();
		}

		a += 0.01;
	};
}
