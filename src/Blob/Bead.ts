import { P5CanvasInstance } from "@p5-wrapper/react";
import p5 from "p5";
import { BlobProps } from "./sketch";

const clamp = (val: number, min: number, max: number): number =>
	Math.max(Math.min(val, max), min);

export class Bead {
	x: number;
	y: number;
	prevx: number;
	prevy: number;
	ox: number;
	oy: number;
	r: number;
	s: number;
	a: number;
	wheel: number;
	speed: number;
	p: P5CanvasInstance<BlobProps>;
	xfreq: number;
	yfreq: number;
	constructor(
		x: number,
		y: number,
		r: number,
		smoothnes: number,
		xfreq: number,
		yfreq: number,
		speed: number,
		p: P5CanvasInstance<BlobProps>
	) {
		this.ox = x;
		this.oy = y;
		this.x = x;
		this.y = y;
		this.prevx = x;
		this.prevy = y;
		this.r = r;
		this.s = smoothnes;
		this.xfreq = xfreq;
		this.yfreq = yfreq;
		this.a = 0;
		this.wheel = 0;
		this.speed = speed;
		this.p = p;
	}

	show() {
		const speed = Math.sqrt(
			Math.pow(this.x - this.prevx, 2) + Math.pow(this.y - this.prevy, 2)
		);
		this.p.push();
		this.p.colorMode(p5.prototype.HSB, 360);
		this.p.fill(speed + (this.wheel % 360), 255, 255);
		this.p.strokeWeight(4);
		this.p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
		this.p.pop();
		this.wheel += 0.1;
	}

	update() {
		this.prevx = this.x;
		this.prevy = this.y;
		this.ox =
			Math.sin(this.a * this.xfreq) * (this.p.width / 4) +
			this.p.width / 2;
		this.oy =
			Math.cos(this.a * this.yfreq) * (this.p.width / 4) +
			this.p.height / 2;
		this.x = p5.prototype.lerp(this.x, this.ox, this.s);
		this.y = p5.prototype.lerp(this.y, this.oy, this.s);
		this.a += this.speed;
	}

	follow() {
		this.prevx = this.x;
		this.prevy = this.y;
		const lerpedX = p5.prototype.lerp(this.x, this.p.mouseX, this.s);
		const lerpedY = p5.prototype.lerp(this.y, this.p.mouseY, this.s);
		this.x = clamp(lerpedX, this.r, this.p.width - this.r);
		this.y = clamp(lerpedY, this.r, this.p.height - this.r);
	}

	connect(x_: number, y_: number) {
		this.p.push();
		this.p.translate(this.p.width / 2, this.p.height / 2);
		this.p.line(this.x, this.y, x_, y_);
		this.p.pop();
	}
}
