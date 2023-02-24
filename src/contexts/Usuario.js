import { createContext, useState } from "react";

export const UsuarioContext = createContext()

export default function UsuarioProvider({ children }) {
    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [idade, setIdade] = useState(0)
    const [atividade, setAtividade] = useState('')
    const [objetivo, setObjetivo] = useState('')

    return (
        <UsuarioContext.Provider
            value={{
                genero,
                setGenero,
                peso,
                setPeso,
                altura,
                setAltura,
                idade,
                setIdade,
                atividade,
                setAtividade,
                objetivo,
                setObjetivo
            }}>
            {children}
        </UsuarioContext.Provider>
    )
}
