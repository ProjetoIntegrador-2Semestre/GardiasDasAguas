"use client"

import { Search } from "lucide-react"
import Card from "./UI/Cards"

export default function AllPublications() {
    const cards = Array(8).fill({
        titulo: "Titulo do Post",
        descricao: "Um pouco do texto do post aqui...",
        imagemUrl: "",
        textoBotao: "Ler mais",
        linkBotao: "/post/1",
        tema: "Tema",
        data: "12/12/2025",
        autor: "Author"
    })

    return (
        <div className="w-full max-w-6xl mx-auto p-4 mt-8 bg-white rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Todas Publicações</h2>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex items-center w-full md:w-64">
                        <Search className="absolute left-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500"
                        />
                    </div>

                    <select className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500 bg-white text-gray-600">
                        <option value="">Categoria</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="design">Design</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        imagemUrl={card.imagemUrl}
                        textoBotao={card.textoBotao}
                        linkBotao={card.linkBotao}
                        tema={card.tema}
                        data={card.data}
                        autor={card.autor}
                    />
                ))}
            </div>
        </div>
    )
}
