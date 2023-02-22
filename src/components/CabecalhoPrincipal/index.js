import Logo from 'components/Logo'
import Menu from 'components/Menu'
import React from 'react'
import styles from './CabecalhoPrincipal.module.scss'

export default function CabecalhoPrincipal() {
    return (
        <header className={styles.CabecalhoPrincipal}>
            <Logo espacamento={true} className={styles.CabecalhoPrincipal__logo} />
            <Menu />
        </header>
    )
}
