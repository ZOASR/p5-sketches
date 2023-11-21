import { P5CanvasInstance } from "@p5-wrapper/react";
import p5, { Vector } from "p5";

export class Line {
	x: number;
	y: number;
	pos: Vector;
	vel: Vector;
	path: { x: number; y: number }[];
	p: P5CanvasInstance;

	constructor(x: number, y: number, p: P5CanvasInstance) {
		this.x = x;
		this.y = y;
		this.pos = p.createVector(x, y);
		this.vel = p.createVector(p5.prototype.random(7, 20), 0);
		this.path = [];
		this.p = p;
	}

	move() {
		this.path.push({
			x: this.pos.x,
			y: this.pos.y,
		});
		this.pos.add(this.vel);
		if (p5.prototype.random(1) > 0.95) {
			this.vel.rotate(p5.prototype.QUARTER_PI);
		} else if (p5.prototype.random(1) < 0.02) {
			this.vel.rotate(-p5.prototype.QUARTER_PI);
		}
		if (this.offScreen()) {
			this.pos = this.p.createVector(
				p5.prototype.random(this.p.width),
				p5.prototype.random(this.p.height)
			);
			this.path = [];
		}
		if (this.path.length > 30) {
			this.path.shift();
		}
	}

	offScreen() {
		return this.path
			.map(
				(v) =>
					v.x > this.p.width ||
					v.y > this.p.height ||
					v.x < 0 ||
					v.y < 0
			)
			.reduce((acc, curr) => acc && curr);
	}

	show() {
		this.p.stroke(0, 255, 0, 100);
		this.p.noFill();
		this.p.strokeWeight(7);
		this.p.beginShape();
		for (let i = 0; i < this.path.length; i++) {
			this.p.vertex(this.path[i].x, this.path[i].y);
		}
		this.p.endShape();
	}
}
