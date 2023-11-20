const Footer = () => {
	return (
		<>
			<div className=" footer flex justify-center fixed bottom-0 py-4 w-full">
				<p>Built With: </p>
				<div className="stack flex justify-between">
					<img
						className="logo vite hover:-translate-y-1 transition-all duration-150 cursor-pointer"
						src="../../images/Vitejs-logo.svg"
						width="30"
						alt=""
					/>
					<img
						className="logo tailwind hover:-translate-y-1 transition-all duration-150 cursor-pointer"
						src="../../images/tailwindcss.svg"
						width="30"
						alt=""
					/>
					<img
						className="logo node hover:-translate-y-1 transition-all duration-150 cursor-pointer"
						src="../../images/Node.js_logo.svg"
						width="30"
						alt=""
					/>
					<img
						className="logo react hover:-translate-y-1 transition-all duration-150 cursor-pointer"
						src="../../images/React-icon.svg"
						width="30"
						alt=""
					/>
					<img
						className="logo p5 hover:-translate-y-1 transition-all duration-150 cursor-pointer"
						src="../../images/P5js_Logo.svg"
						width="30"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export default Footer;
