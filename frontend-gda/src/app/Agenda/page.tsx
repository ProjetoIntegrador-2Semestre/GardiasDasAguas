"use client";

import { useState } from "react";
import Header from "../Components/Header";
import MiniCardAgenda from "../Components/MiniCardAgenda";
import AgendaModal from "../Components/AgendaModal"; // ✅ IMPORTAÇÃO DO MODAL

export default function Agenda() {
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

            {/* HEADER FIXO */}
            <Header />

            {/* Conteúdo */}
            <div className="flex justify-center items-start w-full px-4 mt-10">
                <div className="bg-white/10 backdrop-blur-[4px] border border-white w-[90vw] h-[80vh] flex flex-col rounded-2xl p-4">
                    
                    <div className="bg-white w-full h-full rounded-xl p-6 flex flex-col">
                        
                        {/* TÍTULO */}
                        <h1 className="text-black text-2xl mb-6">Agenda</h1>

                        {/* LISTA COM SCROLL */}
                        <div className="overflow-y-auto pr-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <MiniCardAgenda
                                        key={i}
                                        onClick={() => setOpen(true)} // CORRETO
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* ✅ MODAL — PRECISA ESTAR AQUI PARA FUNCIONAR */}
            <AgendaModal 
                open={open} 
                onClose={() => setOpen(false)} 
            /> 
        </div>
    );
}
