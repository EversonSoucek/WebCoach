import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import styles from './UsuarioAtividade.module.scss'

export default function UsuarioAtividade() {
    const { atividade, setAtividade } = useContext(UsuarioContext)

    return (
        <div className={styles.usuario}>
            <label htmlFor='Atividade' className={styles.usuario__titulo}>Atividade</label>
            <select name='Atividade' className={styles.usuario__input} value={atividade} onChange={(event) => setAtividade(event.target.value)}>
                <option>Baixo</option>
                <option>Moderado</option>
                <option>Alto</option>
            </select>
        </div>
    )
}
