import Inicio from "./pages/Inicio/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioGenero from "pages/FormulariosSelect/FormularioGenero";
import FormularioIdade from "pages/FormulariosInput/FormularioIdade";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/formulario-genero" element={<FormularioGenero />} />
				<Route path="/formulario-idade" element={<FormularioIdade />} />
			</Routes>

		</BrowserRouter>
	);
}

export default AppRoutes;
