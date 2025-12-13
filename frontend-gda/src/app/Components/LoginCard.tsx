'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "./UI/Button"
import { api } from "../../services/api"

export default function LoginCard() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await api.login(email, senha)
      console.log("Login sucess:", data)
      alert(`Bem-vindo, ${data.nome}!`)
      // Aqui você pode salvar o token/usuário no contexto ou localStorage
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur border border-white/30 
        w-[90vw] max-w-[450px] flex flex-col rounded-2xl p-6 sm:p-10 gap-6
        overflow-hidden shadow-xl transition-all duration-300
        sm:max-h-[80vh] max-h-none mx-auto">

      <h1 className="text-white text-center text-xl sm:text-2xl font-semibold">Bem vindo de volta!</h1>

      {/* Error Message */}
      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="email"
          placeholder="Insira seu email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="password"
          placeholder="Insira sua senha."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      {/* Botão Esqueci a senha */}
      <div className="flex justify-end">
        <button
          onClick={() => router.push('/RecuperarSenha')}
          className="text-white/70 hover:text-white text-sm transition"
        >
          Esqueci a senha.
        </button>
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
        <Button
          nome={loading ? "Carregando..." : "Login"}
          estilo="login"
          clique={handleLogin}
        />
        <Button
          nome="Cadastro"
          estilo="cadastro"
          clique={() => console.log("Cadastro clicado")}
        />
      </div>
    </div>
  )
}
