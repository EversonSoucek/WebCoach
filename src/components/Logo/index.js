import React from 'react'
import logoImagem from './logoImagem.png'
import styles from './Logo.module.scss'

export default function Logo({ tamanhoFonte = '25px', altura = '32px', largura = '39px' }) {
    return (
        <>
            <h1 style={{ fontSize: tamanhoFonte }} className={styles.logo__titulo}>Web Coach</h1>
            <img style={{ height: altura, width: largura }} src={logoImagem} className={styles.logo__imagem} />
        </>
    )
}
