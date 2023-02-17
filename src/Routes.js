import Inicio from "./pages/Inicio/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./pages/Formulario/index";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/form" element={<Formulario/>} />
			</Routes>

		</BrowserRouter>
	);
}

export default AppRoutes;
