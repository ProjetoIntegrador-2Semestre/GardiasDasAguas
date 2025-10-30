'use client'
import Button from "./UI/Button"

export default function RegisterCard(){
    return(
        <div className="bg-white/10 backdrop-blur-[4px] border-white border-1 w-[70vh] h-[60vh] flex flex-col rounded-2xl">
            <div className="items-center flex flex-col p-10 gap-5">
                  <h1 className="text-white">Seja Bem vindo!</h1>
            <input className="bg-white rounded-4xl  placeholder-black/40 w-[50vh] p-3 "type="text" placeholder="Insira seu @usuario." />
            <input className="bg-white rounded-4xl  placeholder-black/40 w-[50vh] p-3 "type="text" placeholder="Insira seu Nickname." />
            <input className="bg-white rounded-4xl  placeholder-black/40 w-[50vh] p-3 "type="text" placeholder="Insira seu email." />
            <input className="bg-white rounded-4xl  placeholder-black/40 w-[50vh] p-3 "type="text" placeholder="Insira sua senha." />
            
            </div>


            <div className="flex gap-3 pl-28  items-center">
                <input type="checkbox" className="h-[3vh] w-[3vh] rounded-2xl border-none" />
                <p className="text-white">Quero receber as novidades em meu email.</p>
            </div>

            <div className="justify-center items-center flex pt-10">
                <Button nome={"Registrar"} estilo={"login"} clique={function (): void {
                    throw new Error("Function not implemented.")
                } }></Button>
        
            </div>
          
            
        </div>
    )
}

//LoginCard