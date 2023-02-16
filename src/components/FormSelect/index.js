import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FormSelect.module.scss'

export default function FormSelect({ conteudo, opcoes,caminho }) {
    return (
        <form className={styles.formSelect}>
            <h1 className={styles.formSelect__titulo}>{conteudo}</h1>
            <select className={styles.formSelect__input}>
                {opcoes.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                ))}
            </select>
            <Link className={styles.formSelect__botaoCallToAction} to={caminho}>Próximo</Link>
        </form>
    )
}
