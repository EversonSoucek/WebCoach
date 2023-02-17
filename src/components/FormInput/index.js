import React from 'react'
import styles from './FormInput.module.scss'

export default function FormInput({ titulo, exemplo }) {
    return (
        <div className={styles.formInput}>
            <h2 className={styles.formInput__titulo}>{titulo}</h2>
            <input className={styles.formInput__input} placeholder={exemplo} name={titulo} type='number' required />
        </div>
    )
}
