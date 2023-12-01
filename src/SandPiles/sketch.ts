import { P5CanvasInstance } from "@p5-wrapper/react";
import p5 from "p5";

export function sketch(p: P5CanvasInstance) {
	let grid: number[][] = [];
	let rows: number = 0;
	let cols: number = 0;
	const scale = 5;
	p.setup = () => {
		if (innerWidth <= 786)
			p.createCanvas(innerWidth * 0.8, innerHeight * 0.7);
		else p.createCanvas(innerWidth * 0.5, innerHeight * 0.7);
		cols = p.width / scale;
		rows = p.height / scale;
		for (let y = 0; y < rows; y++) {
			grid[y] = [];
			for (let x = 0; x < cols; x++) {
				grid[y][x] = 0;
			}
		}
		if (innerWidth <= 786)
			grid[Math.floor(rows / 2)][Math.floor(cols / 2)] = 8000;
		else grid[Math.floor(rows / 2)][Math.floor(cols / 2)] = 30000;
		p.background(0);
		while (!(grid[Math.floor(rows / 2)][Math.floor(cols / 2)] == 4)) {
			for (let y = 0; y < rows; y++) {
				for (let x = 0; x < cols; x++) {
					const g = grid[y][x];
					if (g >= 4) {
						if (x > 0 && x < cols - 1 && y > 0 && y < rows - 1) {
							grid[y][x + 1] += 1;
							grid[y][x - 1] += 1;
							grid[y + 1][x] += 1;
							grid[y - 1][x] += 1;
							grid[y][x] -= 4;
						}
					}
				}
			}
		}
	};

	p.windowResized = () => {
		if (innerWidth <= 786)
			p.resizeCanvas(innerWidth * 0.8, innerHeight * 0.7);
		else p.resizeCanvas(innerWidth * 0.5, innerHeight * 0.7);
		customDraw();
	};

	p.draw = () => {
		p.background(51, 255);
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				let g = grid[y][x];
				p.noStroke();
				p.fill(
					p.map(g, 0, 4, 0, 255),
					p.map(g, 0, 4, 5, 100),
					p.map(g, 0, 4, 0, 30)
				);
				p.rect(x * scale, y * scale, scale, scale);
			}
		}
		p.noLoop();
	};
	const customDraw = () => {
		p.background(0);
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				let g = grid[y][x];
				p.noStroke();
				p.fill(
					p.map(g, 0, 4, 0, 255),
					p.map(g, 0, 4, 5, 100),
					p.map(g, 0, 4, 0, 30)
				);
				p.rect(x * scale, y * scale, scale, scale);
			}
		}
	};
}
