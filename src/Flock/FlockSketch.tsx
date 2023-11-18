import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";
import Slider from "rc-slider";
import { useState } from "react";

const FlockSketch = () => {
	const [vector, setVector] = useState({ a: 5, c: 2, s: 5 });
	const trackStyle = [
		{ backgroundColor: "grey" },
		{ backgroundColor: "black" },
	];
	const handleStyle = [
		{ backgroundColor: "red" },
		{ backgroundColor: "white" },
	];
	const sliderStyle: string =
		" w-10/12 sm:w-1/2 flex flex-col gap-4 text-center my-5 mx-auto ";
	return (
		<>
			<h1 className="text-8xl mx-auto text-center">Flock</h1>
			<div className={sliderStyle}>
				<p>Aligment: {vector.a}</p>
				<Slider
					min={0}
					max={10}
					defaultValue={5}
					step={0.1}
					onChange={(value) =>
						setVector((prevVector) => ({
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
				<p>Cohesion: {vector.c}</p>
				<Slider
					min={0}
					max={10}
					defaultValue={8}
					step={0.1}
					onChange={(value) =>
						setVector((prevVector) => ({
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
				<p>Seperation: {vector.s}</p>
				<Slider
					min={0}
					max={10}
					defaultValue={5}
					step={0.1}
					onChange={(value) =>
						setVector((prevVector) => ({
							...prevVector,
							s: value,
						}))
					}
					trackStyle={trackStyle}
					handleStyle={handleStyle}
					railStyle={{ backgroundColor: "white" }}
				/>
			</div>
			<div className="flex flex-row justify-center ring-2 ring-slate-800 w-min rounded-2xl bg-black my-5 mx-auto p-5">
				<ReactP5Wrapper
					sketch={sketch}
					a={vector.a}
					c={vector.c}
					s={vector.s}
				></ReactP5Wrapper>
			</div>
		</>
	);
};

export default FlockSketch;
