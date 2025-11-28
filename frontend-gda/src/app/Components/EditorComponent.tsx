"use client";
import { useRouter } from "next/navigation";

export default function EditorComponent() {

const router = useRouter();

  return (
    <div className="bg-white/10 backdrop-blur-[4px] border border-white w-[90vw] h-[70vh] flex flex-col rounded-2xl p-6 gap-4 text-white">
      {/* Header Row - Thumbnail + Right Side */}
      <div className="flex w-full h-full gap-6">
        {/* Thumbnail Upload */}
        <label className="w-60 h-60 bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition text-black/60">
          <input type="file" className="hidden" />
          <div className="flex flex-col items-center text-center opacity-80">
            <span className="text-5xl mb-2">📷</span>
            <p>Clique ou arraste para<br />adicionar a thumbnail</p>
          </div>
        </label>

        {/* Text Editor + Controls */}
        <div className="flex flex-col flex-1 gap-4">
          {/* Editor Toolbar */}
          <div className="flex gap-3 bg-white p-3 rounded-lg   text-black/60 text-sm overflow-x-auto">
            <button className="hover:text-pink-400">T</button>
            <button className="hover:text-pink-400 font-bold">B</button>
            <button className="hover:text-pink-400 italic">I</button>
            <button className="hover:text-pink-400 underline">U</button>
            <button className="hover:text-pink-400">• Lista</button>
            <button className="hover:text-pink-400">1. Lista</button>
          </div>

          {/* Editor Text Area */}
          <textarea
            placeholder="Digite o conteudo do post aqui..."
            className="flex-1 bg-white  rounded-lg p-4 text-black resize-none outline-none placeholder-black/60"
          />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between w-full mt-2">
        {/* Tags + Select */}
        <div className="flex gap-4 items-center">
          <input
            placeholder="Adicionar tags..."
            className="bg-white px-4 py-2 rounded-lg outline-none text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#FF62C8]"
          />

          <select className="bg-white px-4 py-2 rounded-lg outline-none text-black/60 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF62C8]">
            <option>Notícias</option>
            <option>Atualizações</option>
            <option>Eventos</option>
          </select>
        </div>

        {/* Buttons */}
      <div className="flex gap-4 justify-end">
        <button
          onClick={() => router.push("/post")}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow transition"
        >
          Publicar
        </button>

        <button
          onClick={() => router.push("/MeusPosts")}
          className="px-6 py-2 bg-white hover:bg-gray-300 text-[#FF62C8] border-2 border-[#FF62C8] font-semibold rounded-xl shadow transition"
        >
          Salvar Rascunho
        </button>
      </div>
      </div>
    </div>
  );
}
