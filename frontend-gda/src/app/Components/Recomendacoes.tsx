'use client'
import React from "react"
import Card from "./UI/Cards"

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function Recomendacoes() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        api.getPosts().then(data => {
            // Picking 2 random or latest specific posts for recommendations
            setPosts(data.slice(0, 2));
        }).catch(console.error);
    }, []);

    return (
        <div className="pb-10">
            <h2 className="p-8">Sistema de recomendações</h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl mx-auto"
            >
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        titulo={post.titulo}
                        descricao={post.descricao}
                        imagemUrl={post.imagemUrl}
                        textoBotao="Ler mais"
                        linkBotao={`/post/${post.id}`}
                        tema={post.textoBotao || "Geral"}
                        data={post.dataHora ? new Date(post.dataHora).toLocaleDateString() : "Data indefinida"}
                        autor="Admin"
                        variant="reduced"
                    />
                ))}
            </div>
        </div>
    )
}