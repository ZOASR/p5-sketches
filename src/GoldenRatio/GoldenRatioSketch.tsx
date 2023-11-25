import { ReactP5Wrapper } from "@p5-wrapper/react";
import Slider from "rc-slider";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { sketch } from "./sketch";
import "rc-slider/assets/index.css";

type GRSliders = {
	radius: number | number[];
	ratio: number | number[];
};

const GoldenRatioSketch = () => {
	const [sliderValues, setSliderValues] = useState<GRSliders>({
		radius: 300,
		ratio: 1.618,
	});
	const location = useLocation();

	const trackStyle = [
		{ backgroundColor: "#fff47f" },
		{ backgroundColor: "black" },
	];
	const handleStyle = [
		{ backgroundColor: "#656032" },
		{ backgroundColor: "white" },
	];
	const sliderStyle: string =
		" w-10/12 sm:w-1/2 flex flex-col mx-4 gap-4 text-center my-5 mx-auto ";
	return (
		<>
			<div className="flex gap-3 justify-between my-4 w-11/12 sm:w-1/2 mx-auto  ">
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">
						Ratio:{" "}
						{sliderValues.ratio == 1.6180339887
							? "φ"
							: sliderValues.ratio == 3.1415926536
							? "π"
							: sliderValues.ratio == 2.7182818285
							? "e"
							: sliderValues.ratio}
					</p>
					<Slider
						min={0.5}
						max={4}
						defaultValue={1.618}
						step={0.0001}
						onChange={(value: number | number[]) =>
							setSliderValues((prevSliders: GRSliders) => ({
								...prevSliders,
								ratio: value,
							}))
						}
						marks={{
							1.6180339887: "φ",
							3.1415926536: "π",
							2.7182818285: "e",
						}}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">
						Radius: {sliderValues.radius}
					</p>
					<Slider
						min={0}
						max={innerWidth * 0.25}
						defaultValue={300}
						step={1}
						onChange={(value: number | number[]) =>
							setSliderValues((prevSliders: GRSliders) => ({
								...prevSliders,
								radius: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center ring-2 ring-yellow-400 w-min rounded-2xl bg-black my-5 mx-auto overflow-hidden">
				<ReactP5Wrapper
					sketch={sketch}
					ratio={sliderValues.ratio}
					radius={sliderValues.radius}
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

export default GoldenRatioSketch;
