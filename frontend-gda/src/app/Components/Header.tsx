"use client"

import Link from "next/link"
import Button from "./UI/Button"
import { useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()

    return (
        <div className="flex justify-between items-center p-6 px-12">

            <div className="flex items-center gap-2">
                <Link href="/" className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/user.png" alt="User" className="w-full h-full object-cover" />
                </Link>
            </div>

            <div className="text-white flex flex-row justify-center items-center gap-12 font-bold text-lg">
                <Link href="/" className="cursor-pointer hover:text-pink-400 transition-colors">
                    <h3>Home</h3>
                </Link>
                <Link href="/Feed" className="cursor-pointer hover:text-pink-400 transition-colors">
                    <h3>Publicações</h3>
                </Link>
                <Link href="/Galeria" className="cursor-pointer hover:text-pink-400 transition-colors">
                    <h3>Galeria</h3>
                </Link>
                <Link href="/Agenda" className="cursor-pointer hover:text-pink-400 transition-colors">
                    <h3>Agenda</h3>
                </Link>
            </div>

            <div className="gap-4 flex">
                <Button
                    nome="Login"
                    estilo="login"
                    clique={() => router.push("/Login")}
                />

                <Button
                    nome="Registrar"
                    estilo="cadastro"
                    clique={() => router.push("/Register")}
                />
            </div>
        </div>
    )
}