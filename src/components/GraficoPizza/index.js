import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './GraficoPizza.module.scss'

export default function GraficoPizza({ proteina, carboidrato, gordura }) {
    return (
        <div className={styles.graficoPizza}><Pie data={{
            labels: ['Proteína', 'Gordura', 'Carboidrato'],
            datasets: [{
                label: 'Macros',
                data: [proteina, gordura, carboidrato],
                backgroundColor: [
                    '#3E0AF5',
                    '#F5EF03',
                    '#A80E00',
                ],
                borderWidth: 1,
            }]
        }}
            options={{
                layout: {
                    padding: 20
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} /></div>
    )
}
