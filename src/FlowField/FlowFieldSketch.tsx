import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const FlowFieldSketch = () => {
	const location = useLocation();

	return (
		<>
			<div className="flex flex-row justify-center ring-2 ring-black w-min rounded-2xl bg-black my-5 mx-auto overflow-hidden">
				<ReactP5Wrapper sketch={sketch} />
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

export default FlowFieldSketch;
