import CabecalhoInicio from 'components/CabecalhoInicio'
import FormSelect from 'components/FormSelect'
import React from 'react'
import styles from './FormularioGenero.module.scss'


export default function FormularioGenero() {
  return (
    <div className={styles.formularioGenero}>
      <CabecalhoInicio />
      <FormSelect conteudo={'Gênero'} opcoes={['Homem', 'Mulher']} caminho={'/formulario-idade'} />
    </div>
  )
}