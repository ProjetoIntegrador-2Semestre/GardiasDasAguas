"use client";

import React, { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import { useAuth } from "../context/AuthContext";
import { midiaService } from "@/services/midiaService";

interface ImageModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    date: string;
    imageUrl?: string;
    midiaId?: number;
    usuarioId?: number;
    onImageDeleted?: () => void;
}

export default function ImageModal({
    open,
    onClose,
    title,
    date,
    imageUrl,
    midiaId,
    usuarioId,
    onImageDeleted
}: ImageModalProps) {
    const { usuario } = useAuth();
    const [deleting, setDeleting] = useState(false);

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

    // Verificar permissões
    const podeEditar = usuario && (
        usuario.tipoUsuario === "Admin" ||
        (usuarioId && usuario.id === usuarioId)
    );

    const podeExcluir = usuario && (
        usuario.tipoUsuario === "Admin" ||
        (usuario.tipoUsuario === "Escritor" && usuarioId && usuario.id === usuarioId)
    );

    const handleDelete = async () => {
        if (!midiaId || !usuario) return;

        const confirmDelete = window.confirm("Tem certeza que deseja excluir esta imagem?");
        if (!confirmDelete) return;

        setDeleting(true);
        try {
            await midiaService.deleteMidia(midiaId, usuario.id, usuario.tipoUsuario);
            alert("Imagem excluída com sucesso!");
            onImageDeleted?.();
            onClose();
        } catch (error: any) {
            alert(error.message || "Erro ao excluir imagem");
        } finally {
            setDeleting(false);
        }
    };

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
                <div className="rounded-xl overflow-hidden shadow-xl">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={title}
                            className="max-w-[80vw] max-h-[60vh] object-contain"
                        />
                    ) : (
                        <Thumbnail />
                    )}
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

                    {/* Botões de ação */}
                    {(podeEditar || podeExcluir) && (
                        <div className="flex gap-4 mt-4">
                            {podeEditar && (
                                <button
                                    className="px-6 py-2 bg-white text-[#8F005D] rounded-lg font-semibold hover:bg-gray-100 transition"
                                    onClick={() => alert("Funcionalidade de edição em desenvolvimento")}
                                >
                                    Editar
                                </button>
                            )}
                            {podeExcluir && (
                                <button
                                    className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
                                    onClick={handleDelete}
                                    disabled={deleting}
                                >
                                    {deleting ? "Excluindo..." : "Excluir"}
                                </button>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

