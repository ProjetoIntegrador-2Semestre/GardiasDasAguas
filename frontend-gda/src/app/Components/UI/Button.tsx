'use client';
import { error } from "console";

interface IBotao {
    nome: string;
    estilo: keyof typeof estilos;
    clique: () => void;
}

const estilos = {

    login: "w-fit min-w-[80px] h-10 md:w-[7vw] md:h-[5vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white",
    cadastro: "w-fit min-w-[100px] h-10 md:w-[9vw] md:h-[5vh] bg-white transition duration-300 hover:scale-110 text-[#FF62C8] border-2 border-[#FF62C8]",
    conhecer: "w-fit min-w-[140px] h-12 md:w-[14vw] md:h-[7vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white",
    LerMais: "w-fit min-w-[120px] h-10 md:w-[8.3vw] md:h-[5vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white border-2 border-white text-sm",
    Comentar: "w-fit min-w-[100px] h-12 md:w-[9.2vw] md:h-[7vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white border-2 border-white",

} as const

export default function Button({ nome, estilo, clique }: IBotao) {


    const estiloSelecionada = estilos[estilo]

    return (
        <input
            type="button"
            value={nome}
            onClick={clique}
            readOnly={true}
            className={`p-2 px-4 md:px-8 rounded-xl font-semibold cursor-pointer ${estiloSelecionada}`}
        />
    );
}