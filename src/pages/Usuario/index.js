import Footer from 'components/Footer'
import Resultado from 'components/Resultado'
import TituloSecao from 'components/TituloSecao'
import UsuarioAltura from 'components/UsuarioForms/UsuarioAltura'
import UsuarioAtividade from 'components/UsuarioForms/UsuarioAtividade'
import UsuarioGenero from 'components/UsuarioForms/UsuarioGenero'
import UsuarioIdade from 'components/UsuarioForms/UsuarioIdade'
import UsuarioObjetivo from 'components/UsuarioForms/UsuarioObjetivo'
import UsuarioPeso from 'components/UsuarioForms/UsuarioPeso'
import React from 'react'

export default function Usuario() {

	document.title = 'Você'

	return (
		<div>
			<div>
				<TituloSecao>Perfil</TituloSecao>
				<UsuarioAltura />
				<UsuarioPeso />
				<UsuarioIdade />
				<UsuarioGenero />
				<UsuarioAtividade />
				<UsuarioObjetivo />
			</div>
			<div>
				<TituloSecao>Resultado</TituloSecao>
				<Resultado/>
			</div>
			<Footer/>
		</div>
	)
}
