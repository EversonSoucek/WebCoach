import MenuLink from 'components/MenuLink'
import React from 'react'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <MenuLink endereco={'/usuario'}>Você</MenuLink>
            <MenuLink endereco={'/dieta'}>Dieta</MenuLink>
            <MenuLink endereco={'/treino'}>Treino</MenuLink>
        </nav>
    )
}
