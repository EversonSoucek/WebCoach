import CabecalhoPrincipal from 'components/CabecalhoPrincipal'
import TituloSecao from 'components/TituloSecao'
import UsuarioAltura from 'components/UsuarioForms/UsuarioAltura'
import UsuarioAtividade from 'components/UsuarioForms/UsuarioAtividade'
import UsuarioGenero from 'components/UsuarioForms/UsuarioGenero'
import UsuarioIdade from 'components/UsuarioForms/UsuarioIdade'
import UsuarioObjetivo from 'components/UsuarioForms/UsuarioObjetivo'
import UsuarioPeso from 'components/UsuarioForms/UsuarioPeso'
import React from 'react'

export default function Usuario() {
	return (
		<div>
			<CabecalhoPrincipal />
			<TituloSecao>Perfil</TituloSecao>
			<UsuarioAltura />
			<UsuarioPeso />
			<UsuarioIdade />
			<UsuarioGenero />
			<UsuarioAtividade />
			<UsuarioObjetivo />
		</div>
	)
}
