"use client"

import Link from "next/link"
import Button from "./UI/Button"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { LogOut } from "lucide-react"

export default function Header() {
    const router = useRouter()
    const { usuario, logout } = useAuth()

    return (
        <div className="flex justify-between items-center p-6 px-12">

            <div className="flex items-center gap-4">
                {/* Logo or Brand */}
                {usuario ? (
                    <Link href="/Perfil" className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-transparent hover:border-pink-500 transition shadow-lg">
                        <img src="/user.png" alt="User" className="w-full h-full object-cover" />
                    </Link>
                ) : (
                    <div className="w-12 h-12"></div> // Spacer or Logo
                )}
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

            <div className="gap-4 flex items-center">
                {usuario ? (
                    <>
                        <div className="text-white text-sm text-right hidden lg:block">
                            <p className="font-bold">{usuario.nome}</p>
                            <p className="text-xs opacity-70">{usuario.tipoUsuario}</p>
                        </div>

                        {usuario.tipoUsuario === 'Admin' && (
                            <Button
                                nome="Criar Post"
                                estilo="LerMais" // Using existing style or could create 'primary'
                                clique={() => router.push("/Editor")}
                            />
                        )}

                        <button
                            onClick={() => {
                                logout();
                                router.push("/");
                            }}
                            className="text-white hover:text-red-400 transition"
                            title="Sair"
                        >
                            <LogOut size={24} />
                        </button>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </div>
    )
}