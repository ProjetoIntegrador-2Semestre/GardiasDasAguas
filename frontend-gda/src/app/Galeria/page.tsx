"use client";

import { useState, useEffect } from "react";
import Header from "../Components/Header";
import MiniImage from "../Components/MiniImage";
import ImageModal from "../Components/ImageModal";
import AddImageModal from "../Components/AddImageModal";
import { useAuth } from "../context/AuthContext";
import { galeriaService, Galeria as GaleriaType } from "@/services/galeriaService";

export default function Galeria() {
    const { usuario } = useAuth();
    const [open, setOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [selectedMidia, setSelectedMidia] = useState<any>(null);
    const [galeria, setGaleria] = useState<GaleriaType | null>(null);
    const [loading, setLoading] = useState(true);

    // Buscar galeria (assumindo ID 1 como galeria principal)
    const fetchGaleria = async () => {
        setLoading(true);
        try {
            const data = await galeriaService.getGaleriaById(1);
            setGaleria(data);
        } catch (error) {
            console.error("Erro ao carregar galeria:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGaleria();
    }, []);

    const handleImageClick = (midia: any) => {
        setSelectedMidia(midia);
        setOpen(true);
    };

    const handleImageAdded = () => {
        fetchGaleria(); // Recarregar galeria após adicionar imagem
    };

    const handleImageDeleted = () => {
        fetchGaleria(); // Recarregar galeria após excluir imagem
    };

    // Verificar se usuário pode adicionar imagens
    const podeAdicionarImagem = usuario && (usuario.tipoUsuario === "Escritor" || usuario.tipoUsuario === "Admin");

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

                        {/* Cabeçalho com título e botão */}
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-black text-2xl">{galeria?.titulo || "Galeria"}</h1>

                            {podeAdicionarImagem && (
                                <button
                                    onClick={() => setAddModalOpen(true)}
                                    className="px-6 py-2 bg-[#8F005D] text-white rounded-lg font-semibold hover:bg-[#6F004A] transition flex items-center gap-2"
                                >
                                    <span className="text-xl">+</span>
                                    Adicionar Imagem
                                </button>
                            )}
                        </div>

                        {/* Área com scroll apenas dos itens */}
                        <div className="overflow-y-auto pr-2">
                            {loading ? (
                                <div className="flex justify-center items-center h-full">
                                    <p className="text-gray-500">Carregando...</p>
                                </div>
                            ) : galeria?.midias && galeria.midias.length > 0 ? (
                                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
                                    {galeria.midias.map((midia) => (
                                        <MiniImage
                                            key={midia.id}
                                            imageUrl={midia.url}
                                            titulo={midia.titulo}
                                            onClick={() => handleImageClick(midia)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center items-center h-full">
                                    <p className="text-gray-500">Nenhuma imagem na galeria</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de visualização de imagem */}
            <ImageModal
                open={open}
                onClose={() => setOpen(false)}
                title={selectedMidia?.titulo || "Imagem"}
                date={selectedMidia?.dataCriacao ? new Date(selectedMidia.dataCriacao).toLocaleDateString('pt-BR') : ""}
                imageUrl={selectedMidia?.url}
                midiaId={selectedMidia?.id}
                usuarioId={selectedMidia?.usuarioId}
                onImageDeleted={handleImageDeleted}
            />

            {/* Modal de adicionar imagem */}
            <AddImageModal
                open={addModalOpen}
                onClose={() => setAddModalOpen(false)}
                galeriaId={1} // ID da galeria principal
                onImageAdded={handleImageAdded}
            />
        </div>
    );
}
