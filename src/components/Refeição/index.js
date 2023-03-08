import TituloSecao from 'components/TituloSecao'
import React, { useContext, useEffect, useState } from 'react'
import styles from './Refeicao.module.scss'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IoIosRemoveCircle } from 'react-icons/io'
import comidas from 'json/comidas'
import { UsuarioContext } from 'contexts/Usuario'

export default function Refeicao() {
    const [mostrar, setMostrar] = useState(false)
    const [refeicao, setRefeicao] = useState([])
    const [listaDeComida, setListaDeComida] = useState(comidas)
    const [proteinaFalta, setProteinaFalta] = useState(0)
    const [carboidratoFalta, setCarboidratoFalta] = useState(0)
    const [gorduraFalta, setGorduraFalta] = useState(0)
    let somaProteina = 0
    let somaCarboidrato = 0
    let somaGordura = 0

    useEffect(() => {
        refeicao.forEach(comida => {
            somaProteina += comida.proteina
            somaCarboidrato += comida.carboidrato
            somaGordura += comida.gordura
        })
        setProteinaFalta(somaProteina)
        setCarboidratoFalta(somaCarboidrato)
        setGorduraFalta(somaGordura)
    }, [refeicao])

    let id;
    function atualizaValor(event) {
        id = event.target.value
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
        proteinaFalta, carboidratoFalta, gorduraFalta,
        render: (
            <div className={styles.refeicao}>
                <TituloSecao>Dieta</TituloSecao>
                <div className={styles.refeicao__adicionada}>
                    {refeicao.map((item) => (
                        <div key={item.id} className={styles.refeicao__adicionada__secao}>
                            <h2 className={styles.refeicao__adicionada__secao__item}>{item.nome}</h2>
                            <div className={styles.refeicao__adicionada__secao__macros} >
                                <p className={styles.refeicao__adicionada__secao__macros__proteina}>Proteína:{item.proteina}</p>
                                <p className={styles.refeicao__adicionada__secao__macros__gordura}>Gordura:{item.gordura}</p>
                                <p className={styles.refeicao__adicionada__secao__macros__carboidrato}>Carboidrato:{item.carboidrato}</p>
                                <IoIosRemoveCircle onClick={() => removeItem(item.id)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.refeicao__selecionar} style={{ display: mostrar === false ? 'none' : '' }}>
                    <select className={styles.refeicao__selecionar__input} onChange={atualizaValor} >
                        <option></option>
                        {listaDeComida.map((comida) => {
                            return <option key={comida.id}>{comida.nome}</option>
                        })}
                    </select>
                    <button className={styles.refeicao__selecionar__botao} onClick={() => {
                        comidas.forEach((comida) => {
                            if (id === comida.nome) {
                                setRefeicao(refeicao.concat(comida))
                                removeLista(comida.nome)
                            }
                        })
                        setMostrar(false)
                    }}> Adicionar</button>
                </div>
                <div className={styles.refeicao__adicionar} onClick={() => setMostrar(true)} style={{ display: mostrar === true ? 'none' : '' }}>
                    Novo<BsFillPlusCircleFill />
                </div>
            </div>
        )
    }
}