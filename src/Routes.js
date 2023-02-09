import Inicio from "./pages/Inicio/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioIdade from "pages/FormularioIdade";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/formularioidade" element={<FormularioIdade/>}/>
			</Routes> 
		</BrowserRouter>
	);
}

export default AppRoutes;
