'use client'
import Button from "./UI/Button"

export default function LoginCard() {
    return (
        // Mantendo o layout mais responsivo da versão remota
        <div className="bg-white/10 backdrop-blur border border-white/30 
          w-[90vw] max-w-[450px] flex flex-col rounded-2xl p-6 sm:p-10 gap-6
          overflow-hidden shadow-xl transition-all duration-300
          sm:max-h-[80vh] max-h-none mx-auto">

            {/* Título */}
            <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">
                Bem-vindo de volta!
            </h1>

            {/* Inputs */}
            <div className="flex flex-col gap-4">
                <input
                    className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                    type="email"
                    placeholder="Insira seu email."
                />
                <input
                    className="bg-white rounded-xl placeholder-black/40 w-full p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                    type="password"
                    placeholder="Insira sua senha."
                />
            </div>


            {/* Link "Esqueci a senha" */}
            <div className="text-right">
                <a
                    href="#"
                    className="text-white/60 text-xs sm:text-sm hover:text-white/80 transition"
                >
                    Esqueci a senha
                </a>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-none accent-white"
                />
                <p className="text-white text-xs sm:text-sm">Lembrar-me da senha</p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
                <Button
                    nome="Login"
                    estilo="login"
                    clique={() => console.log("Login clicado")}
                />
                <Button
                    nome="Cadastro"
                    estilo="cadastro"
                    clique={() => console.log("Cadastro clicado")}
                />
            </div>
        </div>
    )
}