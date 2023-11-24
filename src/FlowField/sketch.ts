import { P5CanvasInstance } from "@p5-wrapper/react";
import { Particle } from "./Particle";
import p5 from "p5";

export function sketch(p: P5CanvasInstance) {
	const particles: Particle[] = [];
	const scale = 5;

	let rows = 0;
	let cols = 0;

	let flowfield: { vector: p5.Vector; x: number; y: number }[] = [];
	p.setup = () => {
		if (innerWidth <= 786)
			p.createCanvas(innerWidth * 0.8, innerHeight * 0.7);
		else p.createCanvas(innerWidth * 0.5, innerHeight * 0.7);
		rows = Math.floor(p.height / scale);
		cols = Math.floor(p.width / scale);
		for (let i = 0; i < 1000; i++) {
			particles.push(new Particle(p, scale));
		}
		let xoff = 0;
		let yoff = 0;
		for (let i = 0; i < p.height / scale; i++) {
			yoff += 0.1;
			for (let j = 0; j < p.width / scale; j++) {
				xoff += 0.1;
				flowfield.push({
					vector: p5.Vector.fromAngle(
						p.noise(xoff, yoff) * p5.prototype.TWO_PI * 5
					).setMag(0.2),
					x: j * scale,
					y: i * scale,
				});
			}
		}
		p.background(0);
	};

	p.windowResized = () => {
		if (innerWidth <= 786)
			p.resizeCanvas(innerWidth * 0.8, innerHeight * 0.7);
		else p.resizeCanvas(innerWidth * 0.5, innerHeight * 0.5);
	};

	p.draw = () => {
		p.stroke(0);
		for (let particle of particles) {
			particle.show();
			particle.update();
			particle.edges();
			particle.follow(flowfield);
		}
		// for (let flow of flowfield) {
		// 	push();
		// 	translate(flow.j * scale + scale * 0.5, flow.i * scale + scale * 0.5);
		// 	strokeWeight(5);
		// 	line(
		// 		flow.x,
		// 		flow.y,
		// 		flow.x + Math.cos(flow.vector.heading()) * scale,
		// 		flow.y + Math.sin(flow.vector.heading()) * scale
		// 	);
		// 	pop();
		// }
	};
}
