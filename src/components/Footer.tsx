import tailwindLogo from "../../images/tailwindcss.svg";
import viteLogo from "../../images/Vitejs-logo.svg";
import nodeLogo from "../../images/Node.js_logo.svg";
import reactLogo from "../../images/React-icon.svg";
import p5Logo from "../../images/P5js_Logo.svg";

const Footer = () => {
	return (
		<>
			<div className=" footer flex justify-center fixed bottom-0 py-4 w-full">
				<p>Built With: </p>
				<div className="stack flex justify-between">
					<a href="https://vitejs.dev" target="_blank">
						<img
							className="logo vite hover:-translate-y-1 transition-all duration-150 cursor-pointer"
							src={viteLogo}
							width="30"
							alt=""
						/>
					</a>
					<a href="https://tailwindcss.com/" target="_blank">
						<img
							className="logo tailwind hover:-translate-y-1 transition-all duration-150 cursor-pointer"
							src={tailwindLogo}
							width="30"
							alt=""
						/>
					</a>
					<a href="https://nodejs.org/" target="_blank">
						<img
							className="logo node hover:-translate-y-1 transition-all duration-150 cursor-pointer"
							src={nodeLogo}
							width="30"
							alt=""
						/>
					</a>
					<a href="https://react.dev" target="_blank">
						<img
							className="logo react hover:-translate-y-1 transition-all duration-150 cursor-pointer"
							src={reactLogo}
							width="30"
							alt=""
						/>
					</a>
					<a href="https://p5js.org" target="_blank">
						<img
							className="logo p5 hover:-translate-y-1 transition-all duration-150 cursor-pointer"
							src={p5Logo}
							width="30"
							alt=""
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
