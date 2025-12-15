"use client";

import { useState, useEffect } from "react";
import Button from "./UI/Button";
import MiniCard from "./UI/MiniCard";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { api } from "../../services/api";

export default function PerfilCard() {
  const { usuario } = useAuth();
  const [abaAtual, setAbaAtual] = useState("");
  const [posts, setPosts] = useState<any[]>([]);

  // Define as abas com base no tipo de usuário
  const tabs = usuario?.tipoUsuario === "Admin"
    ? ["posts", "curtidas", "sobre", "editor"]
    : ["curtidas", "sobre"];

  // Define a aba inicial correta quando o usuário carregar
  useEffect(() => {
    if (tabs.length > 0 && !tabs.includes(abaAtual)) {
      setAbaAtual(tabs[0]);
    }
  }, [usuario, tabs, abaAtual]);

  useEffect(() => {
    if (usuario && abaAtual === "posts") {
      api.getPostsByUserId(usuario.id)
        .then((data) => setPosts(data))
        .catch((err) => console.error("Erro ao buscar posts do usuario:", err));
    }
  }, [usuario, abaAtual]);

  if (!usuario) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        Carregando perfil...
      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen w-[90vw]
      bg-white/10 backdrop-blur-[4px] 
      border-white border rounded-2xl 
      flex flex-col items-center 
      pt-5 gap-5
      px-4
    "
    >
      {/* CARD DO PERFIL */}
      <div
        className="
        bg-white 
        w-full max-w-[900px]
        h-auto md:h-[15vh] 
        rounded-2xl 
        flex flex-col md:flex-row 
        items-center justify-between 
        px-6 py-4 gap-4
      "
      >
        <div className="flex items-center gap-4">
          <img
            src="/user.png"
            alt="Foto de perfil"
            className="
              w-[60px] h-[60px] 
              md:w-[4vw] md:h-[8vh]
              object-cover drop-shadow-2xl
            "
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{usuario.nome || "Nickname"}</span>
            <span className="font-semibold text-lg">@{usuario.email ? usuario.email.split('@')[0] : "usuario"}</span>
          </div>
        </div>

        <Button nome="Editar" estilo="login" clique={() => { }} />
      </div>

      {/* CARD DE CONTEÚDO */}
      <div
        className="
        bg-white 
        w-full max-w-[900px]
        min-h-[65vh] md:h-[75vh] 
        rounded-2xl 
        flex flex-col 
        px-6 pt-10 pb-6
      "
      >
        {/* TABS */}
        <div
          className="
          text-black text-lg md:text-xl 
          flex flex-wrap md:flex-nowrap
          gap-6 md:gap-8 
          mb-6 pb-2
        "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setAbaAtual(tab)}
              className={`
                capitalize transition-colors
                ${abaAtual === tab
                  ? "text-[#8F005D] font-semibold border-b-2 border-[#8F005D]"
                  : "text-black/50 hover:text-black"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTEÚDO */}
        <div className="mt-4">
          {abaAtual === "posts" && (
            <div
              className="
                max-h-[55vh]
                overflow-y-auto
                pr-2
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                gap-5
                w-full
                min-w-0
                scrollbar-thin
              "
            >
              {posts.length > 0 ? (
                posts.map((post) => (
                  <MiniCard
                    key={post.id}
                    titulo={post.titulo}
                    data="12/12/2025" // Data placeholder pois não existe no model
                    variant="default" // No perfil apenas visualiza
                  />
                ))
              ) : (
                <p className="text-black/60 col-span-full text-center">Nenhum post encontrado.</p>
              )}
            </div>
          )}

          {abaAtual === "curtidas" && (
            <p className="text-black/60">Nenhuma curtida ainda.</p>
          )}

          {abaAtual === "sobre" && (
            <div className="text-black/80">
              <p><strong>Nome:</strong> {usuario.nome}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Tipo de Usuário:</strong> {usuario.tipoUsuario}</p>
            </div>
          )}

          {abaAtual === "editor" && (
            <div className="flex flex-col items-center justify-center p-10 gap-4">
              <p className="text-black/60 text-center">Gerencie suas postagens no editor.</p>
              <Link href="/MeusPosts">
                <Button nome="Ir para Meus Posts" estilo="login" clique={() => { }} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
