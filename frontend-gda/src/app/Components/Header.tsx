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
        <div className="flex justify-between items-center p-4 px-10">

            <div className="flex items-center gap-2">
                <img src="/user.png" alt="Logo" className="w-10 h-10 bg-white rounded-full" />
            </div>

            <div className="text-white flex flex-row justify-center items-center gap-8 font-semibold">
                <h3 className="cursor-pointer hover:text-pink-500 transition-colors">Home</h3>
                <h3 className="cursor-pointer hover:text-pink-500 transition-colors">Publicações</h3>
                <h3 className="cursor-pointer hover:text-pink-500 transition-colors">Galeria</h3>
                <h3 className="cursor-pointer hover:text-pink-500 transition-colors">Agenda</h3>
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