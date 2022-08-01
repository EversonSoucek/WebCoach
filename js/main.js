import { calculaResultados, obtemPaciente, validaAltura, validaGordura, validaIdade, validaPeso, } from "./form.js"
import { perfil } from "./perfil.js"
let paciente = new perfil()
const formPaciente = document.querySelectorAll('#form-paciente')
const erroAltura = document.querySelector('#erro-altura')
const erroPeso = document.querySelector('#erro-peso')
const erroIdade = document.querySelector('#erro-idade')
const erroGordura = document.querySelector('#erro-gordura')
const kcalH = document.querySelector('#kcalnecessario')
obtemPaciente(paciente)
calculaResultados(paciente)
let kcal = paciente.calculaKcalNecessario(paciente.atividade, paciente.objetivo)
kcalH.textContent = kcal
const grafico = document.querySelector('#grafico').getContext('2d')
var graficoMacros = new Chart(grafico, {
    type: 'pie',
    data: {
        labels: ['Proteina', 'Carboidrato', 'Gordura'],
        datasets: [{
            data: [paciente.calculaProteina(kcal), paciente.calculaCarboidrato(kcal), paciente.calculaGordura(kcal)],
            backgroundColor: [
                'rgba(0,0,255)',
                'rgba(255, 0, 0)',
                'rgba(255, 255, 0)',
            ],
            borderColor: [
                'rgba(0,0,255)',
                'rgba(255, 0, 0)',
                'rgba(255, 255, 0)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
})

formPaciente.forEach(info => {
    info.addEventListener('blur', function () {
        const form = document.querySelector('#form')
        if (validaAltura(form)) {
            obtemPaciente(paciente)
            calculaResultados(paciente)
            erroAltura.classList.add('esconder')
        }
        else {
            erroAltura.classList.remove('esconder')
        }

        if (validaPeso(form)) {
            obtemPaciente(paciente)
            calculaResultados(paciente)
            erroPeso.classList.add('esconder')
        }
        else {
            erroPeso.classList.remove('esconder')
        }

        if (validaIdade(form)) {
            obtemPaciente(paciente)
            calculaResultados(paciente)
            erroIdade.classList.add('esconder')
        }
        else {
            erroIdade.classList.remove('esconder')
        }

        if (validaGordura(form)) {
            obtemPaciente(paciente)
            calculaResultados(paciente)
            erroGordura.classList.add('esconder')
        }
        else {
            erroGordura.classList.remove('esconder')
        }
        kcal = paciente.calculaKcalNecessario(paciente.atividade, paciente.objetivo)
        kcalH.textContent = kcal
        atualizaGrafico(paciente)
    })
})

function atualizaGrafico(paciente) {
    const kcal = paciente.calculaKcalNecessario(paciente.atividade, paciente.objetivo)
    graficoMacros.config.data.datasets[0].data[0] = paciente.calculaProteina((kcal))
    graficoMacros.config.data.datasets[0].data[1] = paciente.calculaCarboidrato((kcal))
    graficoMacros.config.data.datasets[0].data[2] = paciente.calculaGordura((kcal))
    graficoMacros.update()
}