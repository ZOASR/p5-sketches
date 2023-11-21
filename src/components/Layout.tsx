import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { FaCode } from "react-icons/fa";

const Layout = () => {
	const location = useLocation();

	return (
		<>
			<Header
				title={location.state?.title ? location.state?.title : null}
			/>
			<Outlet />
			{location.pathname != "/" ? (
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
			) : (
				<></>
			)}
			<Footer />
		</>
	);
};

export default Layout;
