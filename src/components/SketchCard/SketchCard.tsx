import style from "./SketchCard.module.css";
import { Sketch } from "../../sketches_data";
import { Link } from "react-router-dom";
import { useState } from "react";
import sourceCodeImage from "../../../images/source_code.svg";

const toTitleCase = (str: string) =>
	str.replace(
		/\w\S*/g,
		(txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
	);

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
				<div className="w-full h-full rounded-xl bg-white flex justify-center overflow-hidden justify-self-start">
					<img
						className="object-cover w-full "
						src={imageUrl}
						alt={title}
					/>
				</div>
				<hr className="w-10/12 my-4 opacity-10 shadow-lg rounded-lg ring-1 ring-white" />
				<h1 className="text-3xl my-0">{title}</h1>
				<hr
					style={{ borderColor: colors[0], borderWidth: "2px" }}
					className="w-1/6 my-2 shadow-lg rounded-lg"
				/>
				<p
					dangerouslySetInnerHTML={{
						__html: description,
					}}
					className="leading-relaxed text-sm sm:text-md font-thin tracking-wider"
				></p>
				<hr className="w-10/12 my-4 opacity-10 shadow-lg rounded-lg ring-1 ring-white" />
				<div className="flex justify-around align-middle w-full self-end">
					<Link
						className="cursor-pointer m-2 h-min p-2 shadow-sm hover:bg-white/50 hover:ring-white/60 bg-white/20  ring-2 ring-white/30 rounded-lg text-xs md:text-md font-normal hover:underline hover:font-extrabold transition-all duration-150"
						to={title.toLowerCase()}
						state={{ sourceCode, title: toTitleCase(title) }}
					>
						View Sketch
					</Link>
					<span className="h-1/2 self-center mx-2 bg-white rounded-lg ring-2 ring-white opacity-10"></span>
					<a
						className="cursor-pointer self-center"
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
