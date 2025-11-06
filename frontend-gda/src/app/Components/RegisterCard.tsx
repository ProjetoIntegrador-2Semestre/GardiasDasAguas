'use client'
import Button from "./UI/Button"

export default function RegisterCard() {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/30 
      w-[90vw] max-w-[500px] flex flex-col rounded-2xl p-6 sm:p-10 gap-6
      overflow-hidden shadow-xl transition-all duration-300
      sm:max-h-[85vh] max-h-none mx-auto">

      {/* Título */}
      <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">
        Seja bem-vindo!
      </h1>

      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="text"
          placeholder="Insira seu @usuario"
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="text"
          placeholder="Insira seu nickname"
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="email"
          placeholder="Insira seu email"
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="password"
          placeholder="Insira sua senha"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-start sm:items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-none accent-white mt-1 sm:mt-0"
        />
        <p className="text-white text-xs sm:text-sm leading-snug">
          Quero receber as novidades em meu email.
        </p>
      </div>

      {/* Botão */}
      <div className="flex justify-center items-center pt-4">
        <Button
          nome="Registrar"
          estilo="login"
          clique={() => console.log("Registrar clicado")}
        />
      </div>
    </div>
  )
}
