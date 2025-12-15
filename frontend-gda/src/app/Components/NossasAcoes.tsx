"use client";
import Card from "./UI/Cards";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function NossasAcoes() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        api.getPosts().then(data => {
            // Ideally filter for "actions" if applicable, otherwise showing all or latest
            setPosts(data.slice(0, 4)); // Showing 4 latest for example
        }).catch(console.error);
    }, []);

    return (
        <section className="w-full px-8 py-12 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-10 text-gray-800">
                Nossas Ações
            </h1>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl"
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
        </section>
    );
}
