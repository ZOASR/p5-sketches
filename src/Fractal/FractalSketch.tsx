import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from "./FractalSketch.module.css";
import { useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";

interface Shape {
	rotation: number | number[];
	iterations: number | number[];
}

const FractalSketch = () => {
	const [shape, setShape] = useState<Shape>({ rotation: 30, iterations: 3 });
	const location = useLocation();
	return (
		<>
			<div className={style.header}>
				<div className="my-6 w-full sm:w-1/3">
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
						onChange={(value: number | number[]) =>
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
				<div className="my-6 w-full sm:w-1/3">
					<p>No. of iterations: {shape.iterations}</p>
					<Slider
						min={1}
						max={5}
						defaultValue={3}
						step={1}
						marks={{ 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" }}
						onChange={(value: number | number[]) =>
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
			<div className="w-max mx-auto flex justify-center  h-max underline hover:font-extrabold transition-all duration-150">
				<a
					className="flex"
					href={location.state.sourceCode}
					target="_blank"
				>
					<p>View source code</p>
					<span className="w-2"></span>
					<FaCode />
				</a>
			</div>
		</>
	);
};

export default FractalSketch;
