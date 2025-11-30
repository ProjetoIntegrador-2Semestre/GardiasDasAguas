import React from "react";
import Thumbnail from "./Thumbnail";

interface ImageModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    date: string;
}

export default function ImageModal({
    open,
    onClose,
    title,
    date
}: ImageModalProps) {

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            {/* Impede de fechar ao clicar dentro do conteúdo */}
            <div
                className="relative flex flex-col items-center w-[70vw] max-w-[900px]"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Thumbnail */}
                <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-xl p-4 w-full h-[50vh] flex items-center justify-center">
                    <Thumbnail />
                </div>

                {/* Caixa inferior */}
                <div className="mt-[-40px] bg-purple-800 text-white w-[90%] rounded-t-3xl py-8 flex flex-col items-center shadow-xl">
                    <h1 className="text-3xl font-bold mb-2">{title}</h1>
                    <p className="text-lg opacity-90">{date}</p>
                </div>

            </div>
        </div>
    );
}
