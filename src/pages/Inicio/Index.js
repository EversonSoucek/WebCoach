import CabecalhoInicio from 'components/CabecalhoInicio'
import Hero from 'components/Hero'
import React from 'react'
import styles from './Inicio.module.scss'

export default function Inicio() {
  return (
    <div className={styles.inicio}>
      <CabecalhoInicio/>
      <Hero/>
    </div>
    
  )
}
