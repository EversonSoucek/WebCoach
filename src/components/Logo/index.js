import React from 'react'
import logoImagem from './logoImagem.png'
import styles from './Logo.module.scss'

export default function Logo({ tamanhoFonte = '25px', altura = '32px', largura = '39px', espacamento = false }) {
    return (
        <div className={styles.logo}>
            <h1 style={{ fontSize: tamanhoFonte, marginLeft: espacamento === true ? '235px' : '0px' }} className={styles.Logo__titulo}>Web Coach</h1>
            <img style={{ height: altura, width: largura }} src={logoImagem} className={styles.logo__imagem} alt='logo do Web Coach' />
        </div>
    )
}
