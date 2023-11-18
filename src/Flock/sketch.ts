import { P5CanvasInstance, SketchProps } from "react-p5-wrapper";
import Boid from "./Boid";
import p5 from "p5";

export default function sketch(p: P5CanvasInstance) {
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

	p.updateWithProps = ({ a, c, s }: SketchProps) => {
		alignment = a;
		cohesion = c;
		separation = s;
	};

	p.windowResized = () => {
		p.resizeCanvas(innerWidth * 0.5, innerHeight * 0.5);
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
