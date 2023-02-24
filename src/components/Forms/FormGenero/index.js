import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import FormTitulo from '../FormTitulo'
import styles from './FormGenero.module.scss'


export default function FormGenero() {
  const { setGenero } = useContext(UsuarioContext)

  function atualizaValor(event) {
    setGenero(event.target.value)
  }

  return (
    <div>
      <FormTitulo>Gênero</FormTitulo>
      <select className={styles.formGenero} onChange={atualizaValor}>
        <option>Homem</option>
        <option>Mulher</option>
      </select>
    </div>
  )
}
