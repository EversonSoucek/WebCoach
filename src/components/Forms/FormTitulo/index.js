import React from 'react'
import styles from './FormTitulo.module.scss'

export default function FormTitulo({ children }) {
    return (
        <h2 className={styles.formTitulo}>{children}</h2>
    )
}
