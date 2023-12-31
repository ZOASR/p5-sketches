import { sketch } from "./sketch";
import Slider from "rc-slider";
import { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import "rc-slider/assets/index.css";

interface Vector {
	a: number | number[];
	c: number | number[];
	s: number | number[];
}

const FlockSketch = () => {
	const [vector, setVector] = useState<Vector>({ a: 5, c: 2, s: 5 });
	const location = useLocation();

	const trackStyle = [
		{ backgroundColor: "grey" },
		{ backgroundColor: "black" },
	];
	const handleStyle = [
		{ backgroundColor: "red" },
		{ backgroundColor: "white" },
	];
	const sliderStyle: string =
		" w-10/12 sm:w-1/2 flex flex-col mx-4 gap-4 text-center my-5 mx-auto ";
	return (
		<>
			<div className="flex gap-3 justify-between w-1/2 mx-auto">
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">Aligment: {vector.a}</p>
					<Slider
						min={0}
						max={10}
						defaultValue={5}
						step={0.1}
						onChange={(value: number | number[]) =>
							setVector((prevVector: Vector) => ({
								...prevVector,
								a: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">Cohesion: {vector.c}</p>
					<Slider
						min={0}
						max={10}
						defaultValue={8}
						step={0.1}
						onChange={(value: number | number[]) =>
							setVector((prevVector: Vector) => ({
								...prevVector,
								c: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">Seperation: {vector.s}</p>
					<Slider
						min={0}
						max={10}
						defaultValue={5}
						step={0.1}
						onChange={(value: number | number[]) =>
							setVector((prevVector: Vector) => ({
								...prevVector,
								s: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center ring-2 ring-slate-800 w-min rounded-2xl bg-black my-5 mx-auto p-5">
				<ReactP5Wrapper
					sketch={sketch}
					a={vector.a}
					c={vector.c}
					s={vector.s}
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

export default FlockSketch;
