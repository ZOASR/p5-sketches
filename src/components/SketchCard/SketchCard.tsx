import style from "./SketchCard.module.css";
import { Sketch } from "../../sketches_data";
import { Link } from "react-router-dom";
import { useState } from "react";
import sourceCodeImage from "../../../images/source_code.svg";

const SketchCard = ({
	title,
	imageUrl,
	description,
	sourceCode,
	colors,
}: Sketch) => {
	const [isHover, setIsHover] = useState<boolean>(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};
	return (
		<>
			<div
				className={
					style.sketchCard +
					"  shadow-sm hover:shadow-xl hover:shadow-black/20 hover:-translate-y-2 transition-all duration-150 ease-in-out"
				}
				style={{
					background: isHover
						? `linear-gradient(45deg,${colors[1]}, ${colors[0]}) padding-box,linear-gradient(135deg, ${colors[0]},  ${colors[1]}) border-box`
						: undefined,
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="w-full rounded-xl bg-white flex justify-center overflow-hidden">
					<img
						className="object-cover  w-full"
						src={imageUrl}
						alt={title}
					/>
				</div>
				<h1 className="text-3xl">{title}</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: description,
					}}
					className="leading-relaxed text-sm font-thin tracking-wider"
				></p>
				<div className="flex justify-around gap-10 w-full self-end">
					<Link
						className="cursor-pointer font-normal hover:underline hover:font-extrabold transition-all duration-150"
						to={title.toLowerCase()}
						state={{ sourceCode, title: title.toUpperCase() }}
					>
						View Sketch
					</Link>
					<a
						className="cursor-pointer"
						href={sourceCode}
						target="_blank"
					>
						<img
							width={30}
							src={sourceCodeImage}
							alt=""
							aria-label="Source Code"
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default SketchCard;
