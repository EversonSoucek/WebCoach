import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import styles from './UsuarioPeso.module.scss'

export default function UsuarioPeso() {
    const { peso, setPeso } = useContext(UsuarioContext)

    return (
        <div className={styles.usuario}>
            <label htmlFor='Peso' className={styles.usuario__titulo}>Peso</label>
            <input name='Peso' className={styles.usuario__input} type='number' value={peso} onChange={(event) => setPeso(event.target.value)} />
        </div>
    )
}
