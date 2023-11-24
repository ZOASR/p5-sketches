import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import { blue } from "@mui/material/colors";
import { Radio } from "@mui/material";

interface BVector {
	trace: boolean;
	follow: boolean;
}
interface BSliders {
	xfreq: number | number[];
	yfreq: number | number[];
	speed: number | number[];
}

const BlobSketch = () => {
	const [sliderValues, setSliderValues] = useState<BSliders>({
		xfreq: 1,
		yfreq: 1,
		speed: 0.005,
	});
	const [vector, setVector] = useState<BVector>({
		trace: true,
		follow: false,
	});
	const location = useLocation();

	const handleRadio = () => {
		setVector({ trace: !vector.trace, follow: !vector.follow });
	};

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
			<div
				className={`${
					vector.trace ? "flex" : "hidden"
				} gap-3 justify-between my-4 w-11/12 sm:w-1/2 mx-auto`}
			>
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">
						Horizontal Frequency: {sliderValues.xfreq}
					</p>
					<Slider
						min={1}
						max={10}
						defaultValue={1}
						step={1}
						onChange={(value: number | number[]) =>
							setSliderValues((prevSliders: BSliders) => ({
								...prevSliders,
								xfreq: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">
						Vertical Frequency: {sliderValues.yfreq}
					</p>
					<Slider
						min={1}
						max={10}
						defaultValue={1}
						step={1}
						onChange={(value: number | number[]) =>
							setSliderValues((prevSliders: BSliders) => ({
								...prevSliders,
								yfreq: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
				<div className={sliderStyle}>
					<p className="whitespace-nowrap">
						Speed: {sliderValues.speed}
					</p>
					<Slider
						min={0}
						max={0.03}
						defaultValue={0.001}
						step={0.0001}
						onChange={(value: number | number[]) =>
							setSliderValues((prevSliders: BSliders) => ({
								...prevSliders,
								speed: value,
							}))
						}
						trackStyle={trackStyle}
						handleStyle={handleStyle}
						railStyle={{ backgroundColor: "white" }}
					/>
				</div>
			</div>
			<div className="flex w-full justify-center mt-4">
				<div className="flex flex-col-reverse mx-4 p-4 bg-white/20 rounded-lg">
					<p>Oscillate</p>
					<Radio
						checked={vector.trace}
						onChange={handleRadio}
						name="controls"
						sx={{
							color: blue[800],
						}}
					/>
				</div>
				<div className="flex flex-col-reverse mx-4 p-4 bg-white/20 rounded-lg">
					<p>Follow mouse</p>
					<Radio
						checked={vector.follow}
						onChange={handleRadio}
						name="controls"
						sx={{
							color: blue[800],
						}}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-center ring-2 ring-black w-min rounded-2xl bg-black my-5 mx-auto overflow-hidden">
				<ReactP5Wrapper
					xf={sliderValues.yfreq}
					yf={sliderValues.xfreq}
					speed={sliderValues.speed}
					trace={vector.trace}
					follow={vector.follow}
					sketch={sketch}
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

export default BlobSketch;
