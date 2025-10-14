import { error } from "console";

    interface IBotao{
        nome: string;
        estilo: keyof typeof estilos;
        clique: () => void;
    } 

        const estilos = {
            login: "bg-[#FF62C8] transition duration-300 hover:scale-110 text-white",
            cadastro: "bg-white transition duration-300 hover:scale-110 text-[#FF62C8] border-2 border-[#FF62C8]",
        } as const

    export default function Button({nome, estilo, clique}: IBotao){


        const estiloSelecionada = estilos[estilo]

        return (
            <input 
            type="button" 
            value={nome}
            onClick={clique}
            className={`p-2 px-8 rounded-xl font-semibold cursor-pointer ${estiloSelecionada}`}
            />
        );
    }