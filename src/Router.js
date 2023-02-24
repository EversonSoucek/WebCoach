import Inicio from "./pages/Inicio/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formulario from "./pages/Formulario/index";
import Usuario from "pages/Usuario";
import Dieta from "pages/Dieta";
import Treino from "pages/Treino";
import UsuarioProvider from '../src/contexts/Usuario'

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes><Route path="/" element={<Inicio />} /></Routes>
			<UsuarioProvider>
				<Routes>
					<Route path="/form" element={<Formulario />} />
					<Route path="/usuario" element={<Usuario />} />
					<Route path="/dieta" element={<Dieta />} />
					<Route path="/treino" element={<Treino />} />
				</Routes>
			</UsuarioProvider>

		</BrowserRouter>
	);
}

export default AppRoutes;