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
	conteudo: <FormInput exemplo='ex: 22' titulo=' Idade' />
},
{
	id: 2,
	conteudo: <FormInput titulo='Peso' exemplo=' kgs' />
},
{
	id: 3,
	conteudo: <FormInput titulo='Altura' exemplo=' cm' />
},
{
	id: 4,
	conteudo: <FormSelect titulo='Atividade' opcoes={['Baixo', 'Moderado', 'Alto', 'Muito Alto']} />
},
{
	id: 5,
	conteudo: <FormSelect titulo='Objetivo' opcoes={['Perder Peso', 'Manter Peso', 'Ganhar Peso']} />
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
			<div className={styles.formulario__barraDeProgresso}>
				<div className={styles.formulario__barraDeProgresso__progresso} style={{
					width: passo === 0 ? '126px' :
						passo === 1 ? '252px' :
							passo === 2 ? '378px' :
								passo === 3 ? '504px' :
									passo === 4 ? '630px' :
										'756px'
				}}></div>
				<div className={styles.formulario__barraDeProgresso__coluna}>Passo 1</div>
				<div className={styles.formulario__barraDeProgresso__coluna}>Passo 2</div>
				<div className={styles.formulario__barraDeProgresso__coluna}>Passo 3</div>
				<div className={styles.formulario__barraDeProgresso__coluna}>Passo 4</div>
				<div className={styles.formulario__barraDeProgresso__coluna}>Passo 5</div>
				<div className={styles.formulario__barraDeProgresso__coluna}>Passo 6</div>
			</div>
			<div className={styles.formulario__caixa}>
				<div className={styles.formulario__conteudo}>{passoDisplay()}</div>
				<div className={styles.formulario__botoes}>
					<button className={styles.formulario__botao} disabled={passo === 0} onClick={() => { setPasso(passo - 1) }}>Voltar</button>
					<button className={styles.formulario__botao} disabled={passo === 5} onClick={() => { setPasso(passo + 1) }}>Avançar</button>
				</div>
			</div>
		</div>
	)
}