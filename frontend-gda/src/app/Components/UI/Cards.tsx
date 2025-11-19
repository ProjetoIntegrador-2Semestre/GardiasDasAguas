"use client"

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
    variant?: 'large' | 'reduced';
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
    variant = 'large',
}: ICard) {
    const handleButtonClick = () => {
        window.location.href = linkBotao;
    };

    if (variant === 'reduced') {
        return (
            <div className="w-full flex flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 h-40">
                {/* Image Section - Fixed width */}
                <div
                    className="w-1/3 min-w-[120px] bg-gray-200 relative"
                    style={{
                        backgroundImage: imagemUrl ? `url(${imagemUrl})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {!imagemUrl && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                            <div className="w-10 h-10 mb-1 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                                <span className="text-xl">+</span>
                            </div>
                            <span className="text-xs">Thumbnail</span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{titulo}</h3>
                            <span className="bg-pink-700 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                                {tema}
                            </span>
                        </div>
                        <p className="text-gray-600 text-xs line-clamp-2 mb-2">{descricao}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 text-gray-400 text-[10px]">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} />
                                <span>{data}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User size={12} />
                                <span>{autor}</span>
                            </div>
                        </div>

                        <Button
                            nome={textoBotao}
                            estilo="LerMais"
                            clique={handleButtonClick}
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Large variant (Default)
    return (
        <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
            <div
                className="w-full h-64 bg-gray-200 relative"
                style={{
                    backgroundImage: imagemUrl ? `url(${imagemUrl})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {!imagemUrl && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                        <div className="w-16 h-16 mb-2 border-4 border-gray-400 rounded-xl flex items-center justify-center">
                            <span className="text-4xl">+</span>
                        </div>
                        <span className="text-sm font-medium">Thumbnail</span>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{titulo}</h2>
                    <span className="bg-pink-700 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                        {tema}
                    </span>
                </div>

                <p className="text-gray-600 text-base mb-8 flex-grow">{descricao}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-6 text-gray-400 font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{data}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={18} />
                            <span>{autor}</span>
                        </div>
                    </div>

                    <Button
                        nome={textoBotao}
                        estilo="LerMais"
                        clique={handleButtonClick}
                    />
                </div>
            </div>
        </div>
    );
}
