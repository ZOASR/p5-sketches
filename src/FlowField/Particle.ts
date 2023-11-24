import { P5CanvasInstance } from "@p5-wrapper/react";
import p5 from "p5";

export class Particle {
	pos: p5.Vector;
	vel: p5.Vector;
	acc: p5.Vector;
	prevPos: p5.Vector;
	p: P5CanvasInstance;
	scale: number;
	cols: number;
	constructor(p: P5CanvasInstance, scale: number) {
		this.pos = new p5.Vector(
			Math.random() * p.width,
			Math.random() * p.height
		);
		this.vel = new p5.Vector();
		this.acc = new p5.Vector();
		this.prevPos = this.pos.copy();
		this.p = p;
		this.scale = scale;
		this.cols = this.p.width / scale;
	}

	show() {
		const r = this.p.map(this.pos.x, 0, this.p.width, 0, 255);
		const g = this.p.map(this.acc.mag(), 0, 0.5, 0, 255);
		const b = this.p.map(this.vel.y, -2, 2, 255, 0);
		this.p.stroke(r, g, b, 50);
		this.p.strokeWeight(1);
		this.p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
		this.updatePrev();
	}

	updatePrev() {
		this.prevPos.x = this.pos.x;
		this.prevPos.y = this.pos.y;
	}

	update() {
		this.vel.add(this.acc);
		this.vel.limit(2);
		this.pos.add(this.vel);
		// this.pos.x = clamp(this.pos.x, 0, width);
		// this.pos.y = clamp(this.pos.y, 0, height);
		this.acc.mult(0);
	}

	follow(flowfield: { vector: p5.Vector; x: number; y: number }[]) {
		const x = Math.floor(this.pos.x / this.scale);
		const y = Math.floor(this.pos.y / this.scale);
		const index = x + y * this.cols;
		const field = flowfield[index];
		if (field) {
			const force = field.vector;
			this.acc.add(force);
		}
	}

	edges() {
		if (this.pos.x > this.p.width) {
			this.pos.x = 0;
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = this.p.width;
			this.updatePrev();
		}
		if (this.pos.y > this.p.height) {
			this.pos.y = 0;
			this.updatePrev();
		}
		if (this.pos.y < 0) {
			this.pos.y = this.p.height;
			this.updatePrev();
		}
	}
}
