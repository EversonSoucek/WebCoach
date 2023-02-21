import React from 'react'
import styles from './SecaoDieta.module.scss'
import maca from './maca.png'
import { Link } from 'react-router-dom'

export default function SecaoDieta() {
    return (
        <section className={styles.secaoDieta}>
            <img src={maca} className={styles.secaoDieta__imagem} alt='maçã' />
            <div className={styles.secaoDieta__divisao}>
                <h2 className={styles.secaoDieta__titulo}>Calculadora de macros</h2>
                <p className={styles.secaoDieta__texto}>Uma calculadora de macros completa com adição de aliementos e manutenção de dieta</p>
                <Link className={styles.secaoDieta__botaoCallToAction} to='/form'>Comece já</Link>
            </div>

        </section>
    )
}
