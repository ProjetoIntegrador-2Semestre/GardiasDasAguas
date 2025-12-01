"use client";

import React, { useEffect } from "react";
import Thumbnail from "./Thumbnail";
import { Calendar, User, Clock } from "lucide-react";

interface AgendaModalProps {
    open: boolean;
    onClose: () => void;

    // Agora TUDO opcional
    title?: string;
    date?: string;
    publicationDate?: string;
    description?: string;
}

export default function AgendaModal({
    open,
    onClose,
    title = "Título do Evento",
    date = "10/10/2025",
    publicationDate = "10/10/2025",
    description = "Descrição breve sobre o evento. Edite esta informação conforme necessário.",
}: AgendaModalProps) {

    // Fecha com ESC
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-8"
            onClick={onClose}
        >
            <div
                className="
                   
                    w-full 
                    max-w-6xl 
                    h-[90vh] 
                    max-h-[600px]
                    rounded-3xl 
                    shadow-2xl 
                    flex 
                    flex-col 
                    sm:flex-row 
                    overflow-hidden
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Thumbnail */}
                <div 
                    className="
                       
                    "
                >
                    <div className="w-full h-full">
                        <Thumbnail /> 
                    </div>
                </div>

                {/* Painel Roxo */}
                <div
                    className="
                        sm:w-2/5 
                        w-full 
                        h-1/2 
                        sm:h-full
                        bg-[#8F005D] 
                        p-8 
                        text-white 
                        flex 
                        flex-col 
                        justify-between
                        relative
                    "
                >
                    {/* Botão Fechar */}
                    <button
                        onClick={onClose}
                        className="
                            absolute 
                            top-4 
                            right-4 
                            text-white 
                            text-3xl 
                            font-bold 
                            hover:opacity-80 
                            transition 
                            z-10
                        "
                        aria-label="Fechar modal"
                    >
                        ✕
                    </button>
                    
                    {/* Conteúdo */}
                    <div>
                        <h1 className="text-4xl font-extrabold mb-4 border-b-2 border-white/50 pb-2">
                            {title}
                        </h1>
                        
                        <div className="space-y-3 text-lg mt-6">
                            <div className="flex items-center gap-3">
                                <Calendar size={20} className="text-pink-300" />
                                <span><span className="font-semibold">Evento:</span> {date}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock size={20} className="text-pink-300" />
                                <span><span className="font-semibold">Publicação:</span> {publicationDate}</span>
                            </div>
                        </div>

                        <p className="mt-8 text-white/90 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/30">
                        <div className="flex items-center gap-3 text-sm opacity-80">
                            <User size={18} />
                            <span>Postado por Usuário</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
