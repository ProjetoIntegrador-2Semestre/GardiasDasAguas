// components/MenuAdmCard.tsx
"use client";

import React from "react";
import MiniCard from "./UI/MiniCard";
import UserMiniCard from "./UI/UserMiniCard";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function MenuAdmCard() {
    const router = useRouter();
    const { usuario } = useAuth();
    const [viewMode, setViewMode] = useState<'publicacoes' | 'usuarios'>('publicacoes');
    const [posts, setPosts] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);

    // Protect route - only Admin can access
    useEffect(() => {
        if (!usuario || usuario.tipoUsuario !== 'Admin') {
            router.push('/');
        }
    }, [usuario, router]);

    // Fetch all posts
    useEffect(() => {
        if (viewMode === 'publicacoes') {
            api.getPosts().then(data => {
                setPosts(data);
            }).catch(err => console.error(err));
        }
    }, [viewMode]);

    // Fetch all users
    useEffect(() => {
        if (viewMode === 'usuarios') {
            api.getAllUsers().then(data => {
                setUsers(data);
            }).catch(err => console.error(err));
        }
    }, [viewMode]);

    const handleDeletePost = async (id: number) => {
        if (confirm("Tem certeza que deseja excluir este post?")) {
            try {
                await api.deletePost(id);
                setPosts(prev => prev.filter(p => p.id !== id));
            } catch (error) {
                console.error("Erro ao deletar post:", error);
                alert("Erro ao excluir post. Tente novamente.");
            }
        }
    };

    const handleDeleteUser = async (id: number) => {
        if (confirm("Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.")) {
            try {
                await api.deleteUser(id);
                setUsers(prev => prev.filter(u => u.id !== id));
            } catch (error) {
                console.error("Erro ao deletar usuário:", error);
                alert("Erro ao excluir usuário. Tente novamente.");
            }
        }
    };

    if (!usuario || usuario.tipoUsuario !== 'Admin') {
        return null;
    }

    return (
        <div className="relative w-[50vw] h-[800px] max-h-[80vh]  p-6 rounded-xl
                    bg-white/10 backdrop-blur-md border border-white/30
                    shadow-lg">

            {/* Search and Select */}
            <div className="flex gap-4 mb-6 px-2">
                <div className="w-[20vw]">
                    <label htmlFor="search" className="sr-only">Pesquisar</label>

                    <div className="relative w-full">
                        {/* Ícone Lucide Search */}
                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-gray-500" />
                        </span>

                        {/* Input */}
                        <input
                            id="search"
                            placeholder="Pesquisar..."
                            className="
              w-full py-3 pl-12 pr-4
              rounded-full bg-white/90
              text-gray-800 placeholder-gray-400
              shadow-sm
              focus:outline-none focus:ring-2 focus:ring-pink-400
              transition
            "
                        />
                    </div>
                </div>

                {/* Select para alternar entre Publicações e Usuários */}
                <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value as 'publicacoes' | 'usuarios')}
                    className="
            py-3 px-6
            rounded-full bg-white/90
            text-gray-800
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-pink-400
            transition
            cursor-pointer
          "
                >
                    <option value="publicacoes">Publicações</option>
                    <option value="usuarios">Usuários</option>
                </select>
            </div>


            {/* White area onde ficam os cards (com scroll) */}
            <div
                className="bg-white rounded-lg p-6 h-[540px] w-auto overflow-y-auto
                   shadow-inner border border-white/20"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {viewMode === 'publicacoes' ? (
                        posts.map(post => (
                            <MiniCard
                                key={post.id}
                                variant="editor"
                                status="publico"
                                titulo={post.titulo}
                                data="12/12/2025"
                                onDelete={() => handleDeletePost(post.id)}
                            />
                        ))
                    ) : (
                        users.map(user => (
                            <UserMiniCard
                                key={user.id}
                                nome={user.nome}
                                tipoUsuario={user.tipoUsuario}
                                fotoPerfil={user.fotoPerfil}
                                onDelete={() => handleDeleteUser(user.id)}
                            />
                        ))
                    )}
                </div>
            </div>

            <div className="">
                {/* Botão flutuante */}
                <button
                    type="button"
                    onClick={() => router.push("/Editor")}
                    className="absolute right-8 bottom-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold
                   px-6 py-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
                >
                    Criar novo post
                </button>
            </div>
        </div>
    );
}
