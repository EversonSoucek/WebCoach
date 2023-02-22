import CabecalhoInicio from 'components/CabecalhoInicio'
import Footer from 'components/Footer'
import FormInput from 'components/FormInput'
import FormSelect from 'components/FormSelect'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
				<div className={styles.formulario__barraDeProgresso__coluna} style={{ color: 'white' }}>Passo 1</div>
				<div className={styles.formulario__barraDeProgresso__coluna} style={{ color: passo >= 1 ? 'white' : 'black' }}>Passo 2</div>
				<div className={styles.formulario__barraDeProgresso__coluna} style={{ color: passo >= 2 ? 'white' : 'black' }}>Passo 3</div>
				<div className={styles.formulario__barraDeProgresso__coluna} style={{ color: passo >= 3 ? 'white' : 'black' }}>Passo 4</div>
				<div className={styles.formulario__barraDeProgresso__coluna} style={{ color: passo >= 4 ? 'white' : 'black' }}>Passo 5</div>
				<div className={styles.formulario__barraDeProgresso__coluna} style={{ color: passo >= 5 ? 'white' : 'black' }}>Passo 6</div>
			</div>
			<div className={styles.formulario__caixa}>
				<div className={styles.formulario__conteudo}>{passoDisplay()}</div>
				<div className={styles.formulario__botoes}>
					<button className={styles.formulario__botao} disabled={passo === 0} onClick={() => { setPasso(passo - 1) }}>Voltar</button>
					<button className={styles.formulario__botao}
						disabled={passo === 5}
						onClick={() => { setPasso(passo + 1) }}
						style={{ display: passo === 5 ? 'none' : '' }}>Avançar</button>
					<button
						onClick={console.log('oi')}
						type='submit' className={styles.formulario__botao__avancar}
						style={{ display: passo === 5 ? '' : 'none' }}>
						<Link to='/usuario'>Enviar</Link></button>
				</div>
			</div>
		</div>
	)
}