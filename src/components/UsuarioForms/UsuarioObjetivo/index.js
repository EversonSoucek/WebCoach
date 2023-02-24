import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import styles from './UsuarioObjetivo.module.scss'

export default function UsuarioObjetivo() {
    const { objetivo, setObjetivo } = useContext(UsuarioContext)

    return (
        <div className={styles.usuario}>
            <label htmlFor='Objetivo' className={styles.usuario__titulo}>Objetivo</label>
            <select name='Objetivo' className={styles.usuario__input} value={objetivo} onChange={(event) => setObjetivo(event.target.value)}>
                <option>Perder Peso</option>
                <option>Manter Peso</option>
                <option>Ganhar Peso</option>
            </select>
        </div>
    )
}
