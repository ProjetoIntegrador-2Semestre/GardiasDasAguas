"use client"

import Button from "./UI/Button"

export default function Header(){

        const handleClick = (nome:string) => {

        if(nome === "Login"){
            alert("Login executado com sucesso!")
        }else if(nome === "Sair"){
            alert("Logout executado com sucesso!")
        }
    }

    return (
        <div className="flex justify-end items-center gap-5 m-3">

            <Button
            nome="Login"
            estilo="login"
            clique={() => { window.location.href = "/post/page"; }}
            />

            <Button
            nome="Cadastro"
            estilo="cadastro"
            clique={() =>{handleClick("Login")}}
            />
        </div>
    )
}