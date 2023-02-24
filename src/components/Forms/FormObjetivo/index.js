import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import FormTitulo from '../FormTitulo'
import styles from './FormObjetivo.module.scss'


export default function FormObjetivo() {
    const { setObjetivo } = useContext(UsuarioContext)

    function atualizaValor(event) {
        setObjetivo(event.target.value)
    }

    return (
        <div>
            <FormTitulo>Objetivo</FormTitulo>
            <select className={styles.formObjetivo} onChange={atualizaValor}>
                <option>Perder Peso</option>
                <option>Manter Peso</option>
                <option>Ganhar Peso</option>
            </select>
        </div>
    )
}
