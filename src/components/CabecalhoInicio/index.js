import Logo from 'components/Logo'
import React from 'react'
import styles from './CabecalhoInicio.module.scss'

export default function CabecalhoInicio() {
    return (
        <header className={styles.cabecalhoInicio}>
            <Logo/>
        </header>
    )
}
