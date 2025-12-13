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
        <div className="w-full p-8 mt-8 rounded-t-[40px] rounded-b-none shadow-xl"
            style={{
                backgroundImage: `linear-gradient(to bottom, #ffffff, #005575)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Todas Publicações</h2>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex items-center w-full md:w-64">
                        <Search className="absolute left-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder=""
                            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-pink-500 bg-white shadow-sm"
                        />
                    </div>

                    <select className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-pink-500 bg-white text-gray-600 shadow-sm min-w-[120px]">
                        <option value="">Categoria</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="design">Design</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        variant="reduced"
                    />
                ))}
            </div>
        </div>
    )
}
