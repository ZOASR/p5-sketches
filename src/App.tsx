import "./App.css";
import {
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
		<Route path="/" element={<Layout />}>
			<Route index element={<SketchGrid />} />
			{sketches.map((sketch: Sketch) => {
				const SketchElement = sketch.sketchComponent;
				if (SketchElement) {
					return (
						<Route
							path={sketch.title.toLowerCase()}
							element={<SketchElement />}
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
