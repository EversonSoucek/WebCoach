import { UsuarioContext } from 'contexts/Usuario'
import React, { useContext } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import styles from './Resultado.module.scss'

export default function Resultado() {
    const { genero, peso, altura, idade, atividade, objetivo } = useContext(UsuarioContext)
    function calculaBasal() {
        if (genero === 'Homem') { return 66 + (13.8 * peso) + (5 * (altura * 100) - (6, 8 * idade)) }
        else { return 655 + (9.6 * peso) + (1, 8 * (altura * 100)) - (4.7 * idade) }
    }


    let basal = calculaBasal()
    let IMC = (peso / (altura * 2).toFixed(0))
    let agua = peso * 35

    function calculaKcalGastas() {
        if (atividade === 'Baixo') { return basal * 1.1 }
        else if (atividade === 'Moderado') { return basal * 1.2 }
        else { return basal * 1.3 }
    }

    let kcalGastas = calculaKcalGastas()

    function calculaKcalNecessaria() {
        if (objetivo === 'Perder Peso') { return kcalGastas - 200 }
        else if (objetivo === 'Manter Peso') { return kcalGastas }
        else { return kcalGastas + 200 }
    }

    let kcalNecessaria = calculaKcalNecessaria()
    let proteina = peso * 2
    let gordura = peso
    let carboidrato = peso * 5

    return (
        <div className={styles.resultado}>
            <div className={styles.resultado__texto}>
                <ul className={styles.resultado__texto__lista}>
                    <li>Basal: {basal} kcal</li>
                    <li>IMC: {IMC}</li>
                    <li>Requisitos de Água: {agua} ml</li>
                    <li>Kcals necessaria: {kcalNecessaria}</li>
                </ul>
            </div>
            <div className={styles.resultado__grafico}>
                oi
            </div>
        </div>

    )
}
