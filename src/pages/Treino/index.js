import TituloSecao from 'components/TituloSecao'
import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IoIosRemoveCircle } from 'react-icons/io'
import styles from './Treino.module.scss'

export default function Treino() {
	let treino = {
		exercio: '',
		kcal: 0
	}
	const [treinos, setTreinos] = useState([])
	const [mostrar, setMostrar] = useState(false)

	function removeItem(nome) {
		const novaLista = treinos.filter((item) => item.nome === nome);
		setTreinos(novaLista)
		console.log(nome);
	}

	document.title = 'Treino'

	return (
		<div className={styles.treino}>
			<TituloSecao>Treino</TituloSecao>
			<div className={styles.treino__selecionados}>
				<div className={styles.treino__selecionados__resetar}><IoIosRemoveCircle className={styles.treino__selecionados__container__botao} onClick={() => removeItem(treino.exercio)} />Resetar treino</div>
				{treinos.map((treino) => {
					return (
						<div className={styles.treino__selecionados__container} key={treino.exercio}>
							<h2 className={styles.treino__selecionados__container__nome}>{treino.exercio}</h2>
							<p className={styles.treino__selecionados__container__kcal}>{treino.kcal}kcal</p>
						</div>
					)
				})}
			</div>
			<div className={styles.treino__botao} style={{ display: mostrar === true ? 'none' : '' }} onClick={() => setMostrar(true)}>
				Novo<BsFillPlusCircleFill />
			</div>
			<div className={styles.treino__crud} style={{ display: mostrar === false ? 'none' : '' }}>
				<input className={styles.treino__crud__input} placeholder='Treino' type='text' onChange={(event) => treino.exercio = event.target.value}></input>
				<input className={styles.treino__crud__input} placeholder='Kcal gastas' type='number' onChange={(event) => treino.kcal = event.target.value}></input>
				<button className={styles.treino__crud__botao} onClick={() => {
					setMostrar(false)
					setTreinos(treinos.concat(treino))
				}}>Adicionar</button>
			</div>
		</div>
	)
}
