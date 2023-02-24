import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import FormTitulo from '../FormTitulo'
import styles from './FormAtividade.module.scss'

export default function FormAtividade() {
    const { setAtividade } = useContext(UsuarioContext)

    function atualizaValor(event) {
        setAtividade(event.target.value)
    }

    return (
        <div>
            <FormTitulo>Atividade</FormTitulo>
            <select className={styles.formAtividade__input} onChange={atualizaValor}>
                <option>Baixo</option>
                <option>Moderado</option>
                <option>Alto</option>
            </select>
        </div>
    )
}
