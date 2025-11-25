"use client";

import { useState } from "react";
import Button from "./UI/Button";
import MiniCard from "./UI/MiniCard";

export default function PerfilCard() {
  const [abaAtual, setAbaAtual] = useState("posts");

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
            <span className="font-semibold text-lg">Nickname</span>
            <span className="font-semibold text-lg">@usuario</span>
          </div>
        </div>

        <Button nome="Editar" estilo="login" clique={() => {}} />
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
          {["posts", "curtidas", "sobre", "editor"].map((tab) => (
            <button
              key={tab}
              onClick={() => setAbaAtual(tab)}
              className={`
                capitalize transition-colors
                ${
                  abaAtual === tab
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
    <MiniCard />
    <MiniCard />
    <MiniCard />
    <MiniCard />
    <MiniCard />
    <MiniCard />
    <MiniCard />
    <MiniCard />
    
    {/* Adicione quantos quiser — agora fica scrollável */}
  </div>
)}
          {abaAtual === "curtidas" && (
            <p className="text-black/60">Nenhuma curtida ainda.</p>
          )}

          {abaAtual === "sobre" && (
            <p className="text-black/60">Informações do usuário aqui...</p>
          )}

          {abaAtual === "editor" && (
            <p className="text-black/60">Ferramentas do editor...</p>
          )}
        </div>
      </div>
    </div>
  );
}
