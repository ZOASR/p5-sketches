import "./App.css";
import { Routes, Route, RouterProvider } from "react-router-dom";
import FractalSketch from "./Fractal/FractalSketch";
import FlockSketch from "./Flock/FlockSketch";

function App() {
	return (
		<>
			<FractalSketch />
			<FlockSketch />
		</>
	);
}

export default App;
