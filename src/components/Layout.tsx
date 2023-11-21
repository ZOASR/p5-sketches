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
			<section className=" flex flex-col h-full justify-center">
				<Suspense
					fallback={
						<h1 className="w-1/2 h-full text-8xl mx-auto text-center filter drop-shadow-2xl">
							Loading...
						</h1>
					}
				>
					<Outlet />
				</Suspense>
			</section>
			<Footer />
		</>
	);
};

export default Layout;
