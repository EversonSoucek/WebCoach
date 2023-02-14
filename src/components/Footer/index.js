import Logo from 'components/Logo'
import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <Logo tamanhoFonte='15px' altura='20px' largura='24px' />
            <a href="https://www.flaticon.com/free-icons/weight-loss" title="weight loss icons" className={styles.rodape__atributo}>Weight loss icons created by nawicon - Flaticon</a> <br />
            <a href="https://www.flaticon.com/free-icons/fruit" title="fruit icons" className={styles.rodape__atributo}>Fruit icons created by Smashicons - Flaticon</a>
        </footer>
    )
}
