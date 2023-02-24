import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import styles from './UsuarioGenero.module.scss'

export default function UsuarioGenero() {
    const { genero, setGenero } = useContext(UsuarioContext)

    return (
        <div className={styles.usuario}>
            <label htmlFor='Gênero' className={styles.usuario__titulo} value={genero} onChange={(event) => setGenero(event.target.value)}>Gênero</label>
            <select name='Gênero' className={styles.usuario__input}>
                <option>Homem</option>
                <option>Mulher</option>
            </select>
        </div>
    )
}
