import Button from "./UI/Button"
import MiniCard from "./UI/MiniCard"

export default function PerfilCard() {
    return (
        <div className="h-[100vh] w-[150vh] bg-white/10 backdrop-blur-[4px] border-white border-1 rounded-2xl flex-col flex items-center pt-5 gap-5 ">
            
            <div className="bg-white w-[50vw] h-[15vh] rounded-2xl flex items-center justify-between px-6">
                
                {/* Perfil à esquerda */}
                <div className="flex items-center gap-4">
                    <img 
                        src="/user.png" 
                        alt="Foto de perfil" 
                        className="w-[4vw] h-[8vh]  object-cover drop-shadow-2xl" 
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-lg">Nickname</span>
                        <span className="font-semibold text-lg">@usuario</span>
                    </div>
                    
                </div>

                {/* Botão à direita */}
                <Button 
                    nome="Editar" 
                    estilo="login" 
                    clique={function (): void {
                        throw new Error("Function not implemented.")
                    }} 
                />

            </div>

<div className="bg-white w-[50vw] h-[75vh] rounded-2xl flex flex-col px-6 pt-10">
  
 
  <div className="text-black text-xl flex gap-8 mb-6">
    <a href="Posts" className="hover:text-blue-600 transition-colors">Posts</a>
    <a href="Curtidas" className="hover:text-blue-600 transition-colors">Curtidas</a>
    <a href="Sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
    <a href="Editor" className="hover:text-blue-600 transition-colors">Editor</a>
  </div>

  
  <div className="flex justify-start">
    <MiniCard />
  </div>

</div>


           
        </div>
    )
}
