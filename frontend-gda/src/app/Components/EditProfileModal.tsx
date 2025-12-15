"use client";

import { useState, useRef } from "react";
import { Camera, X } from "lucide-react";
import Button from "./UI/Button";

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: { nome: string; apelido: string; bio: string; fotoPerfil: string }) => Promise<void>;
    initialData: {
        nome: string;
        apelido: string;
        bio: string;
        fotoPerfil: string;
    };
}

export default function EditProfileModal({ isOpen, onClose, onSave, initialData }: EditProfileModalProps) {
    const [nome, setNome] = useState(initialData.nome);
    const [apelido, setApelido] = useState(initialData.apelido);
    const [bio, setBio] = useState(initialData.bio);
    const [fotoPerfil, setFotoPerfil] = useState(initialData.fotoPerfil);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSave = async () => {
        setLoading(true);
        try {
            await onSave({ nome, apelido, bio, fotoPerfil });
            onClose();
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar perfil.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-[600px] rounded-[30px] p-8 flex flex-col items-center shadow-2xl animate-in fade-in zoom-in duration-200">

                <div className="w-full flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black">Editar perfil</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-black transition">
                        <X size={24} />
                    </button>
                </div>

                <div className="relative group mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                        <img
                            src={fotoPerfil || "/user.png"}
                            alt="Perfil"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                        <Camera className="text-white mb-1" size={24} />
                        <span className="text-white text-xs font-semibold">Trocar perfil</span>
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setFotoPerfil(reader.result as string);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Trocar Nickname"
                        value={apelido}
                        onChange={(e) => setApelido(e.target.value)}
                        className="w-full bg-[#E6E6E6] rounded-xl px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />

                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full bg-[#E6E6E6] rounded-xl px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />

                    <textarea
                        placeholder="Coloque sobre você aqui."
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full h-40 bg-[#E6E6E6] rounded-xl px-4 py-3 text-gray-700 font-medium resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition mb-4 custom-scrollbar"
                    />
                </div>

                <div className="w-full flex justify-end items-center gap-4 mt-2">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-full border-2 border-pink-500 text-pink-500 font-bold hover:bg-pink-50 transition"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="px-8 py-2 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-200"
                    >
                        {loading ? "Salvando..." : "Salvar"}
                    </button>
                </div>

            </div>
        </div>
    );
}
