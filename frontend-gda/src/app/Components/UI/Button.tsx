'use client';
import { error } from "console";

    interface IBotao{
        nome: string;
        estilo: keyof typeof estilos;
        clique: () => void;
    } 

        const estilos = {
            login: "w-[14vh] h-[5vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white",
            cadastro: "w-[18vh] h-[5vh] bg-white transition duration-300 hover:scale-110 text-[#FF62C8] border-2 border-[#FF62C8]",
            conhecer: "w-[27vh] h-[7vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white",
            LerMais: "w-[20vh] h-[5vh] bg-[#FF62C8] transition duration-300 hover:scale-110 text-white border-2 border-white",
        } as const

    export default function Button({nome, estilo, clique}: IBotao){


        const estiloSelecionada = estilos[estilo]

        return (
            <input 
            type="input" 
            value={nome}
            onClick={clique}
            readOnly={true}
            className={`p-2 px-8 rounded-xl font-semibold cursor-pointer ${estiloSelecionada}`}
            />
        );
    }