import { Link } from "react-router-dom";
import githubIcon from "../../images/github-mark-white.svg";

const Header = ({ title }: { title: string }) => {
	return (
		<header className="header sticky z-10 top-0 h-min flex align-middle justify-between w-full p-4">
			{title ? (
				<h1 className="text-3xl font-extrabold">{title}</h1>
			) : (
				<h1 className="text-3xl font-extrabold">p5 Sketches</h1>
			)}
			<nav className="flex gap-5  justify-self-end">
				<Link
					className=" opacity-25 hover:underline hover:opacity-100 transition-all duration-150 text-center"
					to="/p5-sketches"
				>
					Sketches
				</Link>
				<Link
					className="opacity-25 hover:opacity-100 transition-all duration-150"
					to="https://github.com/ZOASR/p5-sketches/"
					target="_blank"
				>
					<img src={githubIcon} width={30} alt="" />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
