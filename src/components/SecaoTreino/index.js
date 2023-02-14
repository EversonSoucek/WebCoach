import React from 'react'
import styles from './SecaoTreino.module.scss'
import secaoTreino from './SecaoTreino.png'

export default function SecaoTreino() {
  return (
    <section className={styles.secaoTreino}>
      <img src={secaoTreino} className={styles.secaoTreino__imagem} alt="Homem fazendo ginástica" />
      <div className={styles.secaoTreino__divisao}>
        <h2 className={styles.secaoTreino__titulo}>Organize seus treinos</h2>
        <p className={styles.secaoTreino__texto}>Ferramentas para gerenciar e manter seu progresso</p>
      </div>

    </section>
  )
}
