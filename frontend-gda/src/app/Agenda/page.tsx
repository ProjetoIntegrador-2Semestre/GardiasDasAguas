"use client";

import { useState, useEffect } from "react";
import Header from "../Components/Header";
import MiniCardAgenda from "../Components/MiniCardAgenda";
import AgendaModal from "../Components/AgendaModal"; // ✅ IMPORTAÇÃO DO MODAL
import { api } from "../../services/api";

export default function Agenda() {
    const [open, setOpen] = useState(false);
    const [eventos, setEventos] = useState<any[]>([]);
    const [selectedEvento, setSelectedEvento] = useState<any>(null);

    useEffect(() => {
        api.getEventos()
            .then(data => setEventos(data))
            .catch(err => console.error(err));
    }, []);

    const handleOpenModal = (evento: any) => {
        setSelectedEvento(evento);
        setOpen(true);
    };

    return (
        <div
            className="w-full h-screen overflow-hidden bg-[#00141a] flex flex-col"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')",
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
                                {eventos.map((evento) => (
                                    <MiniCardAgenda
                                        key={evento.id}
                                        title={evento.titulo}
                                        date={evento.dataHora ? new Date(evento.dataHora).toLocaleDateString() : 'data indefinida'}
                                        thumbnail={evento.imagemUrl || "/thumbnail.png"}
                                        onClick={() => handleOpenModal(evento)} // CORRETO
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* ✅ MODAL — PRECISA ESTAR AQUI PARA FUNCIONAR */}
            {selectedEvento && (
                <AgendaModal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={selectedEvento.titulo}
                    date={selectedEvento.dataHora ? new Date(selectedEvento.dataHora).toLocaleDateString() : 'data indefinida'}
                    description={selectedEvento.descricao}
                // publicationDate can be added if available in backend
                />
            )}
        </div>
    );
}
