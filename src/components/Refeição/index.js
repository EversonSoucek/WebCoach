import TituloSecao from 'components/TituloSecao'
import React, { useEffect, useState } from 'react'
import styles from './Refeicao.module.scss'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IoIosRemoveCircle } from 'react-icons/io'
import comidas from 'json/comidas'

export default function Refeicao() {
    const [mostrar, setMostrar] = useState(0)
    const [refeicao, setRefeicao] = useState([])
    const [listaDeComida, setListaDeComida] = useState(comidas)
    const [proteinaFalta, setProteinaFalta] = useState(0)
    const [carboidratoFalta, setCarboidratoFalta] = useState(0)
    const [gorduraFalta, setGorduraFalta] = useState(0)
    const [kcalFalta, setKcalFalta] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    let somaProteina = 0
    let somaCarboidrato = 0
    let somaGordura = 0
    let somaKcal = 0

    useEffect(() => {
        refeicao.forEach(comida => {
            somaProteina += comida.proteina
            somaCarboidrato += comida.carboidrato
            somaGordura += comida.gordura
            somaKcal += comida.kcal
        })
        setProteinaFalta(somaProteina)
        setCarboidratoFalta(somaCarboidrato)
        setGorduraFalta(somaGordura)
        setKcalFalta(somaKcal)
    }, [refeicao])

    let id;
    function atualizaValor(event) {
        id = event.target.value
        console.log();
    }

    function removeItem(id) {
        const novaLista = refeicao.filter((item) => item.id !== id);
        setRefeicao(novaLista)
        for (let i = 0; i < comidas.length; i++) {
            if (id === comidas[i].id) {
                setListaDeComida(listaDeComida.concat(comidas[i]))
            }
        }
    }

    function removeLista(nome) {
        let novaLista = listaDeComida.filter((item) => item.nome !== nome)
        setListaDeComida(novaLista)
    }

    return {
        proteinaFalta, carboidratoFalta, gorduraFalta, kcalFalta,
        render: (
            <div className={styles.refeicao}>
                <TituloSecao>Dieta</TituloSecao>
                <div className={styles.refeicao__adicionada}>
                    {refeicao.map((item) => (
                        <div key={item.id} className={styles.refeicao__adicionada__secao}>
                            <h2 className={styles.refeicao__adicionada__secao__item}>{item.nome}</h2>
                            <div className={styles.refeicao__adicionada__secao__macros} >
                                <p className={styles.refeicao__adicionada__secao__macros__proteina}>Proteína:{item.proteina.toFixed(1)}</p>
                                <p className={styles.refeicao__adicionada__secao__macros__gordura}>Gordura:{item.gordura.toFixed(1)}</p>
                                <p className={styles.refeicao__adicionada__secao__macros__carboidrato}>Carboidrato:{item.carboidrato.toFixed(1)}</p>
                                <IoIosRemoveCircle onClick={() => removeItem(item.id)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.refeicao__selecionar} style={{ display: mostrar === 2 ? '' : 'none' }}>
                    <select className={styles.refeicao__selecionar__input} onChange={atualizaValor} >
                        <option></option>
                        {listaDeComida.map((comida) => {
                            return <option key={comida.id}>{comida.nome}</option>
                        })}
                    </select>
                    <button className={styles.refeicao__selecionar__botao} onClick={() => {
                        comidas.forEach((comida) => {
                            if (id === comida.nome) {
                                let aux = comida
                                aux.proteina = (quantidade * comida.proteina) / 100
                                aux.carboidrato = (quantidade * comida.carboidrato) / 100
                                aux.gordura = (quantidade * comida.gordura) / 100
                                aux.kcal = (quantidade * comida.kcal) / 100
                                setRefeicao(refeicao.concat(aux))
                                removeLista(comida.nome)
                            }
                        })
                        setMostrar(0)
                    }}> Adicionar</button>
                </div>
                <div className={styles.refeicao__quantidade} style={{ display: mostrar === 1 ? '' : 'none' }}>
                    <input
                        className={styles.refeicao__quantidade__input}
                        placeholder='Quantidade (gramas)'
                        type='number'
                        onChange={(event) => {
                            setQuantidade(event.target.value)
                        }} />
                    <button className={styles.refeicao__quantidade__botao} onClick={() => setMostrar(2)}>proximo</button>
                </div>

                <div className={styles.refeicao__adicionar} onClick={() => setMostrar(1)} style={{ display: mostrar === 0 ? '' : 'none' }}>
                    Novo<BsFillPlusCircleFill />
                </div>
            </div>
        )
    }
}