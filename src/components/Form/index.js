import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Form.module.scss'

export default function Form({ conteudo, tipo, exemplo,caminho }) {
    return (
        <form className={styles.form}>
            <h1 className={styles.form__titulo}>{conteudo}</h1>
            <input placeholder={exemplo} name={conteudo} className={styles.form__input} type={tipo} />
            <Link className={styles.form__botaoCallToAction} to={caminho}>Próximo</Link>
        </form>
    )
}
