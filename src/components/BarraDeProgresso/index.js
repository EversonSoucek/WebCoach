import React, { useEffect, useState } from 'react'
import styles from './BarraDeProgresso.module.scss'

export default function BarraDeProgresso({ cor, valor, valorFalta }) {
    const [progresso, setProgresso] = useState(0)
    let porcentagem = 0

    useEffect(() => {
        //porcentagem = ((valorFalta * 100) / valor)
        porcentagem = 100
        toString(porcentagem)
        porcentagem += "%"
        setProgresso(porcentagem)
    }, [valorFalta])

    return (
        <div className={styles.barraDeProgresso} style={{ borderColor: cor }}>
            <div className={styles.barraDeProgresso__progresso} style={{ backgroundColor: cor, width: progresso }} ></div>
        </div >
    )
}