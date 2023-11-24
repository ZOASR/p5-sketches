import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Suspense } from "react";

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
						<div className="flex justify-center align-middle w-1/2 h-screen text-8xl mx-auto text-center filter drop-shadow-2xl">
							<h1 className="text-center my-auto">Loading...</h1>
						</div>
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
