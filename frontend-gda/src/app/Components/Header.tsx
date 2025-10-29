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
        <div className="flex justify-end m-3">

            <div className="text-white flex flex-row justify-center items-center gap-8 mr-auto">
                <img src="/user.png" alt="facebook" className="w-[4vw] h-[8vh] bg-white rounded-full" />
                <h3>home</h3>
                <h3>Publicação</h3>
                <h3>Galeria</h3>
                <h3>Agenda</h3>
            </div>

            <div className="gap-4 flex">
                <Button
                    nome="Login"
                    estilo="login"
                    clique={() => { window.location.href = "/post/page"; }}
                />

                <Button
                    nome="Cadastro"
                    estilo="cadastro"
                    clique={() => { handleClick("Login") }}
                />
            </div>
        </div>
    )
}