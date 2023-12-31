import SketchCard from "../SketchCard/SketchCard";
import style from "./SketchGrid.module.css";

import { Sketch, sketches } from "../../sketches_data";

const SketchGrid = () => {
	return (
		<>
			<div className={style.sketchGrid}>
				{sketches.map((sketch: Sketch) => {
					return (
						<SketchCard
							key={sketch.title}
							title={sketch.title}
							description={sketch.description}
							imageUrl={sketch.imageUrl}
							sourceCode={sketch.sourceCode}
							colors={sketch.colors}
						/>
					);
				})}
			</div>
		</>
	);
};

export default SketchGrid;
