import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch.js";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./FractalSketch.module.css";

interface Shape {
	rotation: number;
	iterations: number;
}

const FractalSketch = () => {
	const [shape, setShape] = useState({ rotation: 30, iterations: 3 });

	return (
		<>
			<div className={style.header + " transition-all"}>
				<h1 className="text-2xl sm:text-4xl">Fractal</h1>
				<div className="my-6 w-full sm:w-1/2">
					<p>Angle: {shape.rotation}</p>
					<Slider
						min={0}
						max={180}
						defaultValue={30}
						step={0.1}
						marks={{
							30: "30°",
							60: "60°",
							90: "90°",
							180: "180° (Max)",
						}}
						onChange={(value) =>
							setShape((prevShape: Shape) => ({
								...prevShape,
								rotation: value,
							}))
						}
						trackStyle={[
							{ backgroundColor: "#53af1e" },
							{ backgroundColor: "black" },
						]}
						handleStyle={[
							{ backgroundColor: "#00a525" },
							{ backgroundColor: "#005914" },
						]}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
				<div className="my-6 w-full sm:w-1/2">
					<p>No. of iterations: {shape.iterations}</p>
					<Slider
						min={1}
						max={5}
						defaultValue={3}
						step={1}
						marks={{ 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" }}
						onChange={(value) =>
							setShape((prevShape: Shape) => ({
								...prevShape,
								iterations: value,
							}))
						}
						trackStyle={[
							{ backgroundColor: "#53af1e" },
							{ backgroundColor: "black" },
						]}
						handleStyle={[
							{ backgroundColor: "#00a525" },
							{ backgroundColor: "#005914" },
						]}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
			</div>
			<div className={style.canvasWrapper} id="canvas-wrapper">
				<ReactP5Wrapper
					sketch={sketch}
					rotation={shape?.rotation}
					iterations={shape?.iterations}
				></ReactP5Wrapper>
			</div>
		</>
	);
};

export default FractalSketch;
