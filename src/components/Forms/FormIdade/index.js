import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import FormTitulo from '../FormTitulo'
import styles from './FormIdade.module.scss'


export default function FormIdade() {
  const {setIdade } = useContext(UsuarioContext)

  function atualizaValor(event) {
    setIdade(event.target.value)
  }

  return (
    <div>
      <FormTitulo>Idade</FormTitulo>
      <input type='number' name='Idade' className={styles.formIdade} onChange={atualizaValor} />
    </div>
  )
}
