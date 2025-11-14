"use client"
import { useState } from "react"
import Button from "./UI/Button"

export default function Comentarios() {
    const [inputValue, setInputValue] = useState("")
    const [comentarios, setComentarios] = useState<string[]>([
        "Comentário de alguém, bla bla bla bla bla bla bla bla bla",
        "Comentário de alguém, bla bla bla bla bla bla bla bla bla"
    ])

    const adicionarComentario = () => {
        if (inputValue.trim()) {
            setComentarios([inputValue.trim(), ...comentarios])
            setInputValue("")
        }
    }

    const ComentarioItem = ({ texto }: { texto: string }) => (
        <div className="flex gap-3 mb-4 items-start">
            <div className="shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
            <div>
                <p className="text-gray-700 wrap-break-words">{texto}</p>
                <button className="text-[#FF69B4] font-semibold mt-1 hover:underline">
                    Ler Mais
                </button>
            </div>
        </div>
    )

    return (
        <div className="p-8 gap-4 flex flex-col">
            <h2 className="text-2xl font-bold text-black mb-4">Comentários</h2>

            <div className="flex flex-col gap-4">
                <div className="bg-[#E6E6E6] flex items-center p-3 rounded-3xl gap-2 shadow-inner">
                    <div className="shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    
                    <input
                        type="text"
                        placeholder="Adicionar um comentário"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex grow bg-transparent p-1 focus:outline-none text-gray-700 placeholder-gray-500"
                    />
                    <div className="w-1 h-10 bg-gray-400 rounded-full opacity-30"></div>
                </div>

                <div className="self-end">
                    <Button
                        nome="Comentar"
                        estilo="Comentar"
                        clique={adicionarComentario}
                    />
                </div>
            </div>

            <div className="mt-4">
                {comentarios.map((comentario, index) => (
                    <ComentarioItem key={index} texto={comentario} />
                ))}

                <div className="flex justify-center mt-6">
                    <Button
                        nome="Ler mais comentários"
                        estilo="LerMais"
                        clique={() => console.log("Carregar mais comentários")}
                    />
                </div>
            </div>
        </div>
    )
}