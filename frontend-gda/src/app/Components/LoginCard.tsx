'use client'
import { useRouter } from "next/navigation"
import Button from "./UI/Button"

export default function LoginCard() {
  const router = useRouter()

  return (
    <div className="bg-white/10 backdrop-blur-[4px] border-white border-1 w-[70vh] h-[60vh] flex flex-col rounded-2xl z-10 relative">

      <div className="items-center flex flex-col p-10 gap-10">
        <h1 className="text-white">Bem vindo de volta!</h1>

        <input 
          className="bg-white rounded-4xl placeholder-black/40 w-[50vh] p-3" 
          type="text" 
          placeholder="Insira seu email." 
        />

        <input 
          className="bg-white rounded-4xl placeholder-black/40 w-[50vh] p-3" 
          type="text" 
          placeholder="Insira sua senha." 
        />
      </div>

      {/* Botão agora redireciona para a página de Recuperar Senha */}
      <div className="gap-10 pl-28">
        <button 
          onClick={() => router.push('/RecuperarSenha')} 
          className="text-white/50"
        >
          Esqueci a senha.
        </button>
      </div>

      <div className="flex gap-3 pl-28 pt-10 items-center">
        <input type="checkbox" className="h-[3vh] w-[3vh] rounded-2xl border-none" />
        <p className="text-white">Lembrar-me a senha.</p>
      </div>

      <div className="flex justify-center items-center gap-5 pt-10">
        <Button 
          nome={"Login"} 
          estilo={"login"} 
          clique={function (): void { throw new Error("Function not implemented.") }} 
        />

        <Button 
          nome={"Cadastro"} 
          estilo={"cadastro"} 
          clique={function (): void { throw new Error("Function not implemented.") }} 
        />
      </div>

    </div>
  )
}
