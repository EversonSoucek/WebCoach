import React from 'react'
import styles from './FormSelect.module.scss'

export default function FormSelect({ titulo, opcoes }) {
    return (
        <div className={styles.formSelect}>
            <h2 className={styles.formSelect__titulo}>{titulo}</h2>
            <select className={styles.formSelect__selecao}>
                {opcoes.map((opcao) => (
                    <option key={opcao} className={styles.formSelect__opcao}>{opcao}</option>
                ))}
            </select>
        </div>
    )
}
