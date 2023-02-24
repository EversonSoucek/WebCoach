import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import styles from './UsuarioAltura.module.scss'

export default function UsuarioAltura() {
    const { altura, setAltura } = useContext(UsuarioContext)

    return (
        <div className={styles.usuario}>
            <label htmlFor='Altura' className={styles.usuario__titulo} >Altura</label>
            <input name='Altura' type='number' required className={styles.usuario__input} value={altura} onChange={(event) => {setAltura(event.target.value)}} ></input>
        </div>
    )
}
