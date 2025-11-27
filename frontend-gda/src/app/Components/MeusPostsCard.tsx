// components/MeusPostsCard.tsx
"use client";

import React from "react";
import MiniCard from "./UI/MiniCard";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

export default function MeusPostsCard({ children }: Props) {
  const router = useRouter();
  return (
    <div className="relative w-[50vw] h-[800px] max-h-[80vh]  p-6 rounded-xl
                    bg-white/10 backdrop-blur-md border border-white/30
                    shadow-lg">

    {/* Search */}
<div className="w-[30vw] mb-6 px-2"> 
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


      {/* White area onde ficam os cards (com scroll) */}
      <div
        className="bg-white rounded-lg p-6 h-[540px] w-auto overflow-y-auto
                   shadow-inner border border-white/20"
      >
        {/* 
          Aqui é onde você insere os cards.
          Use {children} para renderizar os cards vindos de fora.
          Se quiser testar sem cards, eu deixei um "skeleton card" de exemplo abaixo.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {children ? (
            children
          ) : (
                      <><><MiniCard variant="editor" status="privado" /><MiniCard variant="editor" status="privado" /><MiniCard variant="editor" status="privado" /><MiniCard variant="editor" status="privado" /></><><MiniCard variant="editor" status="privado" /><MiniCard variant="editor" status="privado" /><MiniCard variant="editor" status="privado" /><MiniCard variant="editor" status="privado" /></></>







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
