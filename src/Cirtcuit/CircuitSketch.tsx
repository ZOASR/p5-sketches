import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";

const CircuitSketch = () => {
	return (
		<>
			<div className="w-min mx-auto shadow-lg mb-10 mt-36 overflow-hidden ring-4 ring-green-700 bg-green-950 rounded-lg">
				<ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
			</div>
		</>
	);
};

export default CircuitSketch;
