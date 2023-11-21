import { P5CanvasInstance } from "@p5-wrapper/react";
import * as p5 from "p5";
import { FlockSketchProps } from "./sketch";

export default class Boid {
	p: p5.Vector;
	v: p5.Vector;
	a: p5.Vector;
	maxSpeed: number;
	maxForce: number;
	r: number;
	gravity: p5.Vector;

	p5: P5CanvasInstance<FlockSketchProps>;
	constructor(x: number, y: number, p_: P5CanvasInstance<FlockSketchProps>) {
		this.p = new p5.Vector(x, y);
		this.v = p5.Vector.random2D();
		this.a = new p5.Vector();
		this.maxSpeed = 4;
		this.maxForce = 0.04;
		this.r = 20;
		this.gravity = new p5.Vector();
		this.p5 = p_;
	}

	edges() {
		if (this.p.x > this.p5.width) {
			this.p.x = 0;
		} else if (this.p.y > this.p5.height) {
			this.p.y = 0;
		} else if (this.p.y < 0) {
			this.p.y = this.p5.height;
		} else if (this.p.x < 0) {
			this.p.x = this.p5.width;
		}
	}

	update() {
		this.p.add(this.v);
		this.v.add(this.a);
		this.v.limit(this.maxSpeed);
		this.a.limit(this.maxForce);
		// this.a_ += 0.01;
	}

	follow(x: number, y: number) {
		const t = new p5.Vector(x, y);
		const Dir = p5.Vector.sub(t, this.p);
		Dir.setMag(this.maxSpeed);
		Dir.sub(this.v);
		Dir.limit(this.maxForce);
		this.a.add(Dir);
	}

	separation(boids: Boid[]) {
		const perceptionRadius = 100;
		const steering: p5.Vector = new p5.Vector();
		let total = 0;
		for (const other of boids) {
			const d = this.p5.dist(this.p.x, this.p.y, other.p.x, other.p.y);
			if (other != this && d < perceptionRadius) {
				const diff = p5.Vector.sub(this.p, other.p);
				diff.div(d * d);
				steering.add(diff);
				total++;
			}
		}
		if (total > 0) {
			steering.div(total);
			steering.setMag(this.maxSpeed);
			steering.sub(this.v);
			steering.limit(this.maxForce);
		}
		return steering;
	}

	align(boids: Boid[]) {
		const perceptionRadius = 100;
		const steering = new p5.Vector();
		let total = 0;
		for (const other of boids) {
			const d = p5.prototype.dist(
				this.p.x,
				this.p.y,
				other.p.x,
				other.p.y
			);
			if (other != this && d < perceptionRadius) {
				steering.add(other.v);
				total++;
			}
		}
		if (total > 0) {
			steering.div(total);
			steering.setMag(this.maxSpeed);
			steering.sub(this.v);
			steering.limit(this.maxForce);
		}
		return steering;
	}

	cohesion(boids: Boid[]) {
		const perceptionRadius = 50;
		const steering = new p5.Vector();
		let total = 0;
		for (const other of boids) {
			const d: number = p5.prototype.dist(
				this.p.x,
				this.p.y,
				other.p.x,
				other.p.y
			);
			if (other != this && d < perceptionRadius) {
				steering.add(other.p);
				total++;
			}
		}
		if (total > 0) {
			steering.div(total);
			steering.sub(this.p);
			steering.setMag(this.maxSpeed);
			steering.sub(this.v);
			steering.limit(this.maxForce);
		}
		return steering;
	}

	flock(boids: Boid[], a: number, c: number, s: number) {
		const alignment = this.align(boids);
		const cohesion = this.cohesion(boids);
		const separation = this.separation(boids);

		alignment.mult(a);
		cohesion.mult(c);
		separation.mult(s);

		this.a.add(alignment);
		this.a.add(cohesion);
		this.a.add(separation);
		this.a.add(this.gravity);
	}

	show() {
		this.p5.push();
		this.p5.colorMode(p5.prototype.HSB);
		const ha = this.v.heading();
		const hue = p5.prototype.map(this.v.mag(), 0, this.maxSpeed, 0, 360);
		this.p5.stroke(hue, 255, 255);
		const l: p5.Vector = p5.Vector.fromAngle(ha);
		l.setMag(this.v.mag() * 2.5);
		this.p5.translate(this.p.x, this.p.y);
		this.p5.strokeWeight(3);
		this.p5.line(l.x, l.y, 0, 0);
		this.p5.pop();
	}
}
