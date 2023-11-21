const Header = ({ title }: { title: string }) => {
	return (
		<div className="header sticky z-10 top-0 flex justify-center w-full p-4">
			{title ? (
				<h1 className="text-3xl font-extrabold">{title}</h1>
			) : (
				<h1 className="text-3xl font-extrabold">p5 Sketches</h1>
			)}
		</div>
	);
};

export default Header;
