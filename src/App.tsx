import "./App.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import FractalSketch from "./Fractal/FractalSketch";
import FlockSketch from "./Flock/FlockSketch";
import Layout from "./components/Layout";
import SketchGrid from "./components/SketchGrid/SketchGrid";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<SketchGrid />} />
			<Route path="flock" element={<FlockSketch />} />
			<Route path="fractal" element={<FractalSketch />} />
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
