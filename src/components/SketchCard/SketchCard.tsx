import style from "./SketchCard.module.css";
import { Sketch } from "../../sketches_data";
import { Link } from "react-router-dom";

const SketchCard = ({ title, imageUrl, description, sourceCode }: Sketch) => {
	return (
		<>
			<div
				className={
					style.sketchCard +
					"  shadow-sm hover:shadow-xl hover:shadow-black/20 hover:-translate-y-2 transition-all duration-150 ease-in-out"
				}
			>
				<div className="w-full rounded-xl bg-white flex justify-center overflow-hidden">
					<img
						className="object-cover  w-full"
						src={imageUrl}
						alt={title}
					/>
				</div>
				<h1 className="text-3xl">{title}</h1>
				<p className="leading-normal text-sm font-thin tracking-wider">
					{description}
				</p>
				<div className="flex justify-around">
					<Link
						className="cursor-pointer font-normal hover:underline hover:font-extrabold transition-all duration-150"
						to={title.toLowerCase()}
						state={{ sourceCode, title: title.toUpperCase() }}
					>
						View Sketch
					</Link>
					<Link className="cursor-pointer" to={sourceCode}>
						<img
							width={30}
							src="../../../images/source_code.svg"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default SketchCard;
