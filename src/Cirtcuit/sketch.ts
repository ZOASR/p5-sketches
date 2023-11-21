import { P5CanvasInstance } from "@p5-wrapper/react";
import p5 from "p5";
import { Line } from "./Line";

export function sketch(p: P5CanvasInstance) {
	const lines: Line[] = [];
	p.setup = () => {
		p.createCanvas(innerWidth * 0.5, innerHeight * 0.5);
		for (let i = 0; i < 30; i++) {
			lines.push(
				new Line(
					p5.prototype.random(p.width),
					p5.prototype.random(p.height),
					p
				)
			);
		}
	};

	p.windowResized = () => {
		p.resizeCanvas(innerWidth * 0.5, innerHeight * 0.5);
	};

	p.draw = () => {
		p.background(0, 51, 0, 50);
		for (let l of lines) {
			l.move();
			l.show();
		}
	};
}
