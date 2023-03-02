import React, { useContext } from 'react'
import styles from './Dieta.module.scss'
import BarraDeProgresso from 'components/BarraDeProgresso'
import { UsuarioContext } from 'contexts/Usuario'
import TituloSecao from 'components/TituloSecao'
import Refeicao from 'components/Refeição'

export default function Dieta() {
	const { proteina, carboidrato, gordura, kcalNecessaria } = useContext(UsuarioContext)
	return (
		<div className={styles.dieta}>
			<ul className={styles.dieta__macrosProgressao}>
				<li className={styles.dieta__macrosProgressao__item}>
					Proteína
					<BarraDeProgresso cor='#3E0AF5' />
					{proteina}g
				</li>
				<li className={styles.dieta__macrosProgressao__item}>
					Carboidrato
					<BarraDeProgresso cor='#A80E00' />
					{carboidrato}g
				</li>
				<li className={styles.dieta__macrosProgressao__item}>
					Gordura
					<BarraDeProgresso cor='#F5EF03' />
					{gordura}g
				</li>
			</ul>
			<div className={styles.dieta__kcal}>
				Kcal necessarios
				<BarraDeProgresso cor='black' />
				{kcalNecessaria}kcal
			</div>
			<Refeicao titulo='Café da manhã' />
			<TituloSecao>Almoço</TituloSecao>
			<TituloSecao>Lanche</TituloSecao>
			<TituloSecao>Janta</TituloSecao>
		</div>
	)
}
