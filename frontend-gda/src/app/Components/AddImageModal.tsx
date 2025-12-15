"use client";

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { midiaService } from "@/services/midiaService";

interface AddImageModalProps {
    open: boolean;
    onClose: () => void;
    galeriaId: number;
    onImageAdded: () => void;
}

export default function AddImageModal({ open, onClose, galeriaId, onImageAdded }: AddImageModalProps) {
    const { usuario } = useAuth();
    const [titulo, setTitulo] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setImageUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!usuario) {
            setError("Você precisa estar logado");
            return;
        }

        if (!file && !imageUrl) {
            setError("Selecione um arquivo ou insira uma URL");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("tipo", "imagem");
            if (titulo) formData.append("titulo", titulo);
            formData.append("galeriaId", galeriaId.toString());
            if (file) {
                formData.append("arquivo", file);
            } else {
                formData.append("url", imageUrl);
            }

            await midiaService.createMidia(
                formData,
                usuario.id,
                usuario.tipoUsuario
            );

            // Resetar formulário
            setTitulo("");
            setImageUrl("");
            setFile(null);
            onImageAdded();
            onClose();
        } catch (err: any) {
            setError(err.message || "Erro ao adicionar imagem");
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl p-8 w-[90vw] max-w-md shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Adicionar Imagem</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        aria-label="Fechar modal"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                            Título (opcional)
                        </label>
                        <input
                            id="titulo"
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8F005D] focus:border-transparent"
                            placeholder="Digite o título da imagem"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Imagem
                        </label>
                        <div className="flex flex-col gap-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-[#8F005D] file:text-white
                                hover:file:bg-[#6F004A]"
                            />
                            <div className="text-center text-sm text-gray-500">- OU -</div>
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) => {
                                    setFile(null);
                                    setImageUrl(e.target.value);
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8F005D] focus:border-transparent"
                                placeholder="https://exemplo.com/imagem.jpg"
                            />
                        </div>
                    </div>

                    {/* Preview da imagem */}
                    {(imageUrl || file) && (
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                            <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                <img
                                    src={imageUrl}
                                    alt="Preview"
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 px-4 py-2 bg-[#8F005D] text-white rounded-lg hover:bg-[#6F004A] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Adicionando..." : "Adicionar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
