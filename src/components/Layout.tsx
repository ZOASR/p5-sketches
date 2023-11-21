import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { FaCode } from "react-icons/fa";
import { lazy, Suspense } from "react";

// const FaCode = lazy(() => import("react-icons/fa"));

const Layout = () => {
	const location = useLocation();
	return (
		<>
			<Header
				title={location.state?.title ? location.state?.title : null}
			/>
			<Suspense fallback={<h1>Loading...</h1>}>
				<section className="h-full">
					<Outlet />
				</section>
			</Suspense>
			<Footer />
		</>
	);
};

export default Layout;
