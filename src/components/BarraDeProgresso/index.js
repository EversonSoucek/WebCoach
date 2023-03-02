import React from 'react'
import styles from './BarraDeProgresso.module.scss'

export default function BarraDeProgresso({ cor }) {
    return (
        <div className={styles.barraDeProgresso} style={{ borderColor: cor }}>
            <div className={styles.barraDeProgresso__progresso} style={{ backgroundColor: cor }}></div>
        </div>
    )
}
