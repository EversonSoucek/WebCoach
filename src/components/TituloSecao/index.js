import React from 'react'
import styles from './TituloSecao.module.scss'

export default function TituloSecao({ children }) {
    return (
        <h1 className={styles.tituloSecao}>{children}</h1>
    )
}
