import React from 'react'
import VasilhaDeComida from './VasilhaDeComida.png'
import styles from './Hero.module.scss'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <h1 className={styles.hero__titulo}>Cuide da sua dieta e<br /> seus treinos</h1>
                <p className={styles.hero__texto}>Web Coach é a melhor<br /> forma de cuidar da sua<br /> dieta e planejar seus<br /> treinos</p>
                <div className={styles.hero__botoes}>
                    <Link className={styles.hero__botaoCallToAction} to='/formularioidade'>Comece já</Link>
                    <Link className={styles.hero__botaoVerMais} onClick={() => { window.scrollTo(0, 1000) }}>Ver mais</Link>
                </div>
            </div>
            <img className={styles.hero__imagem} src={VasilhaDeComida} alt="Vasilha de comida e um copo com suco" />

        </section>
    )
}
