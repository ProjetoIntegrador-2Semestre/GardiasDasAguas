import { Calendar, User } from "lucide-react";
import Button from "../UI/Button";

interface ICard {
    titulo: string;
    descricao: string;
    imagemUrl?: string;
    tema?: string;
    data?: string;
    autor?: string;
    textoBotao: string;
    linkBotao: string;
}

export default function Card({
    titulo,
    descricao,
    imagemUrl,
    tema = "Tema",
    data = "12/12/2025",
    autor = "Author",
    textoBotao,
    linkBotao,
}: ICard) {
    const handleButtonClick = () => {
        window.location.href = linkBotao;
    };

    return (
        <div className="w-[80vh] rounded-2xl  bg-[#f3f3f3] overflow-hidden transition-all hover:scale-[1.02]">
            {/* Thumbnail */}
            <div
                className="w-full h-[160px] bg-gray-300 flex items-center justify-center text-gray-600 text-sm"
                style={{
                    backgroundImage: imagemUrl ? `url(${imagemUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {!imagemUrl && <span>Thumbnail</span>}
            </div>

            {/* Conteúdo */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{titulo}</h2>
                    <span className="bg-pink-700 text-white text-xs px-3 py-1 rounded-4xl">
                        {tema}
                    </span>
                </div>

                <p className="text-gray-700 text-sm mb-4">{descricao}</p>

                <div className="flex items-center justify-between">
                    <div className="flex flex-row text-gray-500 text-sm gap-4">
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{data}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{autor}</span>
                        </div>
                    </div>

                    <div>
                        <Button
                            nome={textoBotao}
                            estilo="LerMais"
                            clique={handleButtonClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
