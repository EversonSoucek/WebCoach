import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import styles from './UsuarioIdade.module.scss'

export default function UsuarioIdade() {
  const { idade, setIdade } = useContext(UsuarioContext)

  return (

    <div className={styles.usuario}>
      <label htmlFor='Idade' className={styles.usuario__titulo}>Idade</label>
      <input name='Idade' type='number' className={styles.usuario__input} value={idade} onChange={(event) => setIdade(event.target.value)} />
    </div>
  )
}
