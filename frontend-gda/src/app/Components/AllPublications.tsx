"use client"

import { Search } from "lucide-react"
import Card from "./UI/Cards"

import { api } from "../../services/api"
import { useEffect, useState } from "react"

export default function AllPublications() {
    const [posts, setPosts] = useState<any[]>([])
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')

    const [uniqueThemes, setUniqueThemes] = useState<string[]>([])

    useEffect(() => {
        api.getPosts().then(data => {
            setPosts(data)
            // Extract unique themes from TextoBotao (which we use as Tema)
            const themes = Array.from(new Set(data.map((p: any) => p.textoBotao).filter(Boolean))) as string[];
            setUniqueThemes(themes);
        }).catch(err => console.error(err))
    }, [])

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.titulo.toLowerCase().includes(search.toLowerCase()) ||
            post.descricao.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category ? (post.textoBotao || "").toLowerCase() === category.toLowerCase() : true;

        return matchesSearch && matchesCategory;
    });

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
                            placeholder="Pesquisar..."
                            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-pink-500 bg-white shadow-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-pink-500 bg-white text-gray-600 shadow-sm min-w-[120px]"
                    >
                        <option value="">Todos Temas</option>
                        {uniqueThemes.map(theme => (
                            <option key={theme} value={theme}>{theme}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                    <Card
                        key={post.id}
                        titulo={post.titulo}
                        descricao={post.descricao}
                        imagemUrl={post.imagemUrl}
                        textoBotao="Ler mais"
                        linkBotao={`/post/${post.id}`}
                        tema={post.textoBotao || "Geral"} // Usando textoBotao como Tema
                        data={post.dataHora ? new Date(post.dataHora).toLocaleDateString() : "Data indefinida"}
                        autor="Admin"
                        variant="reduced"
                    />
                ))}
            </div>
        </div>
    )
}
