import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const CircuitSketch = () => {
	const location = useLocation();

	return (
		<>
			<div className="w-min mx-auto shadow-lg mb-10 mt-36 overflow-hidden ring-4 ring-green-700 bg-green-950 rounded-lg">
				<ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
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

export default CircuitSketch;
