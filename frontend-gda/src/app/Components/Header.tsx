"use client"

import Button from "./UI/Button"

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
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/user.png" alt="User" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="text-white flex flex-row justify-center items-center gap-12 font-bold text-lg">
                <h3 className="cursor-pointer hover:text-pink-400 transition-colors">Home</h3>
                <h3 className="cursor-pointer hover:text-pink-400 transition-colors">Publicações</h3>
                <h3 className="cursor-pointer hover:text-pink-400 transition-colors">Galeria</h3>
                <h3 className="cursor-pointer hover:text-pink-400 transition-colors">Agenda</h3>
            </div>

            <div className="gap-4 flex">
                <Button
                    nome="Login"
                    estilo="login"
                    clique={() => { window.location.href = "/post/page"; }}
                />

                <Button
                    nome="Registrar"
                    estilo="cadastro"
                    clique={() => { handleClick("Login") }}
                />
            </div>
        </div>
    )
}