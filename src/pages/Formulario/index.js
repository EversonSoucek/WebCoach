import CabecalhoInicio from 'components/CabecalhoInicio'
import FormInput from 'components/FormInput'
import FormSelect from 'components/FormSelect'
import React, { useState } from 'react'
import styles from './Formulario.module.scss'


const forms = [{
	id: 0,
	conteudo: <FormSelect opcoes={['Homem', 'Mulher']} titulo='Gênero' />,
},
{
	id: 1,
	conteudo: <FormInput exemplo='ex: 22' titulo='Idade' />
},
{
	id: 2,
	conteudo: <FormInput titulo='Peso' exemplo='kgs' />
},
{
	id: 3,
	conteudo: <FormInput titulo='Altura' exemplo='cm' />
},
{
	id: 4,
	conteudo: <FormSelect titulo='Atividade' opcoes={['Baixo', 'Moderado', 'Alto', 'Muito Alto']} />
},
{
	id: 5,
	conteudo: <FormSelect />
}
]

export default function Formulario() {
	const [passo, setPasso] = useState(0)

	function passoDisplay() {
		for (let i = 0; i < forms.length; i++) {
			if (passo === forms[i].id) {
				return forms[i].conteudo
			}
		}
	}

	return (
		<div className={styles.formulario}>
			<CabecalhoInicio />
			<div className={styles.formulario__caixa}>
				<div className={styles.formulario__conteudo}>{passoDisplay()}</div>
				<div className={styles.formulario__botoes}>
					<button className={styles.formulario__botao} disabled={passo === 0} onClick={() => { setPasso(passo - 1) }}>Voltar</button>
					<button className={styles.formulario__botao} disabled={passo === 4} onClick={() => { setPasso(passo + 1) }}>Avançar</button>
				</div>
			</div>
		</div>
	) 
}