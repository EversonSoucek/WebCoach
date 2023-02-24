import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import FormTitulo from '../FormTitulo'
import styles from './FormPeso.module.scss'


export default function FormPeso() {
  const { setPeso } = useContext(UsuarioContext)

  function atualizaValor(event) {
    setPeso(event.target.value)
  }

  return (
    <div>
      <FormTitulo>Peso</FormTitulo>
      <input name='Peso' type='number' placeholder='Kgs' className={styles.formPeso} onChange={atualizaValor} />
    </div>
  )
}
