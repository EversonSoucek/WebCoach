import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.scss'

export default function MenuLink({ endereco, children }) {
    const localizacao = useLocation()
    return (
        <NavLink className={styles.linkNavegacao} to={endereco} style={{ textDecoration: localizacao.pathname === endereco ? 'underline' : 'none' }}>
            {children}
        </NavLink>
    )
}
