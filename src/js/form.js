import { firebase } from "./firebase.js"
import { getFirestore, collection, doc, updateDoc, getDoc } from "firebase/firestore"
firebase()
const dataBase = getFirestore()
const colRef = collection(dataBase, 'Perfil')
export const docRef = doc(dataBase, "Perfil", "XWB0yo33YzFwstfMoohZ")
export function obtemPaciente(paciente) {
    updateDoc(docRef, {
        Altura: paciente.altura = form.altura.value,
        Peso: paciente.peso = form.peso.value,
        Idade: paciente.idade = form.idade.value,
        Gordura: paciente.gordura = form.gordura.value,
        Genero: paciente.genero = form.genero.value,
        Atividade: paciente.atividade = form.atividade.value,
        Objetivo: paciente.objetivo = form.objetivo.value,
    })
        .then(console.log("enviado ao firebase"))
    paciente.id = "XWB0yo33YzFwstfMoohZ"
}

export function calculaResultados(paciente) {
    const informacaoBasal = document.querySelector('#informacao-basal')
    const informacaoImc = document.querySelector('#informacao-imc')
    const informacaoAgua = document.querySelector('#informacao-agua')
    informacaoBasal.textContent = paciente.calculaBasal(paciente.peso, paciente.altura, paciente.idade, paciente.genero).toFixed(2)
    informacaoImc.textContent = paciente.calculaImc(paciente.peso, paciente.altura).toFixed(2)
    informacaoAgua.textContent = paciente.calculaAgua(paciente.peso).toFixed(2)
    informacaoAgua.textContent += ' L'
    informacaoBasal.textContent += ' KCAL'
}

export function validaAltura(form) {
    if (form.altura.value === undefined || form.altura.value < 1) { return false }
    else { return true }
}

export function validaPeso(form) {
    if (form.peso.value === undefined || form.peso.value < 30) { return false }
    else { return true }
}

export function validaIdade(form) {
    if (form.idade.value === undefined || form.idade.value < 18) { return false }
    else { return true }
}

export function validaGordura(form) {
    if (form.gordura.value === undefined || form.gordura.value < 0) { return false }
    else { return true }
}
