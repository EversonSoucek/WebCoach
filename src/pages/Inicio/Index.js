import CabecalhoInicio from 'components/CabecalhoInicio'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import SecaoDieta from 'components/SecaoDieta'
import SecaoTreino from 'components/SecaoTreino'
import React from 'react'
import styles from './Inicio.module.scss'

export default function Inicio() {
  document.title = 'WebCoach'


  return (
    <div className={styles.inicio}>
      <CabecalhoInicio />
      <Hero />
      <SecaoTreino />
      <SecaoDieta />
      <Footer/>
    </div>

  )
}
