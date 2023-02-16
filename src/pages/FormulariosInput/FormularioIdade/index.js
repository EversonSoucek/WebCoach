import CabecalhoInicio from 'components/CabecalhoInicio'
import Form from 'components/Form'
import React from 'react'
import styles from './FormularioIdade.module.scss'

export default function FormularioIdade() {
    return (
        <div className={styles.formularioIdade}>
            <CabecalhoInicio />
            <Form conteudo={'Idade'} tipo='number' />
        </div>

    )
}
