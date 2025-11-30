"use client";

import React, { useEffect } from "react";
import Thumbnail from "./Thumbnail";

interface ImageModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    date: string;
}

export default function ImageModal({ open, onClose, title, date }: ImageModalProps) {

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-start z-50"
            onClick={onClose}
        >
            {/* Impede fechar ao clicar dentro */}
            <div
                className="w-full h-full flex flex-col items-center justify-start pt-10 relative"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Botão fechar (X) */}
                <button
                    onClick={onClose}
                    className="
                        absolute 
                        top-4 
                        right-6 
                        text-white 
                        text-3xl 
                        font-bold 
                        hover:scale-110 
                        transition 
                        select-none
                    "
                    aria-label="Fechar modal"
                >
                    ✕
                </button>

                {/* Thumbnail */}
                <div className=" rounded-xl overflow-hidden shadow-xl">
                    <Thumbnail />
                </div>

                {/* Espaço entre imagem e caixa inferior */}
                <div className="h-10" />

                {/* Caixa inferior fixa no rodapé */}
                <div
                    className="
                        w-full
                        bg-[#8F005D]
                        py-8
                        flex flex-col
                        items-center
                        justify-center
                        rounded-t-3xl
                        text-white
                        shadow-2xl
                        mt-auto
                    "
                >
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-lg opacity-90 mt-1">{date}</p>
                </div>

            </div>
        </div>
    );
}
