import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import FormTitulo from '../FormTitulo'
import styles from './FormAltura.module.scss'


export default function FormAltura() {
    const { setAltura } = useContext(UsuarioContext)

    function atualizaValor(event) {
        setAltura(event.target.value)
    }

    return (
        <div className={styles.formAltura}>
            <FormTitulo>Altura</FormTitulo>
            <input className={styles.formAltura__input} type='number' name='Altura' placeholder='cm' onChange={atualizaValor} />
        </div>
    )
}
