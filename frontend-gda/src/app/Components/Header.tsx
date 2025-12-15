"use client"

import Button from "./UI/Button"
import Link from "next/link";

export default function Header() {

    const handleClick = (nome: string) => {

        if (nome === "Login") {
            alert("Login executado com sucesso!")
        } else if (nome === "Sair") {
            alert("Logout executado com sucesso!")
        }
    }

    return (
        <div className="flex justify-between items-center p-6 px-12">

          
    <div className="flex items-center gap-2">
  <Link href="/Perfil">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition">
      <img
        src="/user.png"
        alt="Ir para o perfil"
        className="w-full h-full object-cover"
      />
    </div>
  </Link>
</div>

            <div className="text-white flex flex-row justify-center items-center gap-12 font-bold text-lg">
                <a href="/" className="cursor-pointer hover:text-pink-400 transition-colors">Home</a>
                <a href="Feed" className="cursor-pointer hover:text-pink-400 transition-colors">Publicações</a>
                <a href="Galeria" className="cursor-pointer hover:text-pink-400 transition-colors">Galeria</a>
                <a href="Agenda" className="cursor-pointer hover:text-pink-400 transition-colors">Agenda</a>
            </div>

            <div className="gap-4 flex">
                <Button
                    nome="Login"
                    estilo="login"
                    clique={() => { window.location.href = "/Login"; }}
                />

                <Button
                    nome="Registrar"
                    estilo="cadastro"
                    clique={() => { window.location.href = "/Register"; }}
                />
            </div>
        </div>
    )
}