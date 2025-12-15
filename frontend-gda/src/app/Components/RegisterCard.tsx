'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "./UI/Button"
import { api } from "../../services/api"

export default function RegisterCard() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    apelido: '',
    nome: '',
    email: '',
    senha: '',
    bio: 'Novo usuário' // Default bio since field is missing in design
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRegister = async () => {
    try {
      setLoading(true)
      setError('')
      // Mapping fields to backend expectations
      // Note: Assuming "nickname" input is for Nome/Display Name and @usuario for Apelido
      const payload = {
        Nome: formData.nome,
        Apelido: formData.apelido,
        Email: formData.email,
        Senha: formData.senha,
        Bio: formData.bio
      }

      const data = await api.register(payload)
      console.log("Registro sucesso:", data)
      alert(`Conta criada com sucesso! Bem-vindo, ${data.nome}`)
      router.push('/')
      // Redirect or show login
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur border border-white/30 
      w-[90vw] max-w-[500px] flex flex-col rounded-2xl p-6 sm:p-10 gap-6
      overflow-hidden shadow-xl transition-all duration-300
      sm:max-h-[85vh] max-h-none mx-auto">

      {/* Título */}
      <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">
        Seja bem-vindo!
      </h1>

      {/* Error Message */}
      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="text"
          name="apelido"
          placeholder="Insira seu @usuario (Apelido)"
          value={formData.apelido}
          onChange={handleChange}
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="text"
          name="nome"
          placeholder="Insira seu nome (Nickname)"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="email"
          name="email"
          placeholder="Insira seu email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          value={formData.senha}
          onChange={handleChange}
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
      <div className="flex flex-col justify-center items-center gap-3 pt-4">
        <Button
          nome={loading ? "Registrando..." : "Registrar"}
          estilo="login"
          clique={handleRegister}
        />
        <button
          onClick={() => router.push('/Login')}
          className="text-white/70 hover:text-white text-sm transition"
        >
          Já tenho conta
        </button>
      </div>
    </div>
  )
}
