import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";

const SandPiles = () => {
	return (
		<div className="rounded-lg w-min h-min mx-auto overflow-hidden m-10">
			<ReactP5Wrapper sketch={sketch} />
		</div>
	);
};

export default SandPiles;
