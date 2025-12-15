"use client"

import Card from "./UI/Cards"

import { api } from "../../services/api"
import { useEffect, useState } from "react"

export default function UltimosPost() {
    const [latestPosts, setLatestPosts] = useState<any[]>([])

    useEffect(() => {
        api.getPosts().then(data => {
            // Assuming higher ID is newer, or just take the end of the array if it's appended
            // Let's reverse to show newest first
            const sorted = [...data].reverse().slice(0, 3)
            setLatestPosts(sorted)
        }).catch(err => console.error(err))
    }, [])

    if (latestPosts.length === 0) return null // or loading state

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="border-2 border-white bg-white/10 rounded-[30px] p-8 backdrop-blur-sm">
                <h2 className="text-white text-2xl font-bold mb-6">Ultimos Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Card (Left) */}
                    {latestPosts[0] && (
                        <div className="md:col-span-1">
                            <div className="h-full">
                                <Card
                                    titulo={latestPosts[0].titulo}
                                    descricao={latestPosts[0].descricao}
                                    imagemUrl={latestPosts[0].imagemUrl}
                                    textoBotao="Ler mais"
                                    linkBotao={`/post/${latestPosts[0].id}`}
                                    tema="Novidade"
                                    data="Agora"
                                    autor="Admin"
                                />
                            </div>
                        </div>
                    )}

                    {/* Small Cards (Right) */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        {latestPosts[1] && (
                            <Card
                                titulo={latestPosts[1].titulo}
                                descricao={latestPosts[1].descricao}
                                imagemUrl={latestPosts[1].imagemUrl}
                                textoBotao="Ler mais"
                                linkBotao={`/post/${latestPosts[1].id}`}
                                tema="Novidade"
                                data="Agora"
                                autor="Admin"
                                variant="reduced"
                            />
                        )}
                        {latestPosts[2] && (
                            <Card
                                titulo={latestPosts[2].titulo}
                                descricao={latestPosts[2].descricao}
                                imagemUrl={latestPosts[2].imagemUrl}
                                textoBotao="Ler mais"
                                linkBotao={`/post/${latestPosts[2].id}`}
                                tema="Novidade"
                                data="Agora"
                                autor="Admin"
                                variant="reduced"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}