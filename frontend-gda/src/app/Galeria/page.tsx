"use client";

import { useState } from "react";
import Header from "../Components/Header";
import MiniImage from "../Components/MiniImage";
import ImageModal from "../Components/ImageModal";

export default function Galeria() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="w-full h-screen overflow-hidden bg-[#00141a] flex flex-col"
            style={{
                backgroundImage: "url('/background2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "scroll",
            }}
        >
            {/* HEADER FIXO NO TOPO */}
            <Header />

            {/* Conteúdo central da página, sem scroll */}
            <div className="flex justify-center items-start w-full px-4 mt-10">

                {/* Galeria Board */}
                <div className="bg-white/10 backdrop-blur-[4px] border border-white w-[90vw] h-[80vh] flex flex-col rounded-2xl p-4">

                    {/* DIV branca interna */}
                    <div className="bg-white w-full h-full rounded-xl p-6 flex flex-col">

                        {/* Título */}
                        <h1 className="text-black text-2xl mb-6">Galeria</h1>

                        {/* Área com scroll apenas dos itens */}
                        <div className="overflow-y-auto pr-2">

                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <MiniImage key={i} onClick={() => setOpen(true)} />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Modal que aparece SOBRE toda a tela */}
            <ImageModal
                open={open}
                onClose={() => setOpen(false)}
                title="Título da Imagem"
                date="10/10/2025"
            />
        </div>
    );
}
