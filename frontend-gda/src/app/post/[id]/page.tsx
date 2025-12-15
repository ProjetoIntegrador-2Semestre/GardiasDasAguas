"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { api } from "../../../services/api"
import Header from "../../Components/Header"
import Thumbnail from "../../Components/Thumbnail"
import Post from "../../Components/Post"
import Footer from "../../Components/Footer"
import Comentarios from "../../Components/Comentarios"
import Recomendacoes from "../../Components/Recomendacoes"

export default function PostPage() {
    const params = useParams();
    const id = params?.id as string;
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            api.getPostById(id)
                .then(data => {
                    setPost(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#00141a] text-white">
                <p>Carregando...</p>
            </div>
        )
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#00141a] text-white">
                <p>Post não encontrado.</p>
            </div>
        )
    }

    return (
        <div
            className="flex flex-col min-h-screen"
            style={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
            }}
        >
            <Header />

            <div className="h-[60vh] flex items-center justify-center mt-10">
                <Thumbnail imagemUrl={post.imagemUrl} />
            </div>

            <div className="bg-white rounded-t-3xl mt-8 bg-linear-to-b from-white via-white/10% to-[#005575]">
                <Post
                    titulo={post.titulo}
                    descricao={post.descricao}
                    imagemUrl={post.imagemUrl}
                />
                <Comentarios />
                <Recomendacoes />
                <Footer />
            </div>
        </div>
    );
}
