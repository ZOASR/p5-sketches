import "./App.css";
import {
	Link,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import SketchGrid from "./components/SketchGrid/SketchGrid";
import { Sketch, sketches } from "./sketches_data";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/p5-sketches" element={<Layout />}>
			<Route index element={<SketchGrid />} />
			{sketches.map((sketch: Sketch) => {
				const SketchElement = sketch.sketchComponent;
				if (SketchElement) {
					return (
						<Route
							path={sketch.title.toLowerCase()}
							element={
								<>
									<div className="absolute top-10 text-md sm:text-2md underline w-full my-2 md:fixed p-8">
										<Link
											className="opacity-25 hover:underline hover:opacity-100 transition-all duration-150"
											to="/p5-sketches"
										>
											&larr; Go back
										</Link>
									</div>
									<SketchElement />
									<h2
										className="sm:text-3xl my-10 w-11/12 text-sm sm:w-1/2 p-2 text-center font-light mx-auto leading-relaxed rounded-lg ring-2 bg-slate-500/50 ring-slate-400/50 shadow-xl"
										dangerouslySetInnerHTML={{
											__html: sketch.description,
										}}
									></h2>
								</>
							}
						/>
					);
				}
				return <></>;
			})}
		</Route>
	)
);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
