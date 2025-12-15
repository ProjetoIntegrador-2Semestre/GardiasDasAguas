import { useState } from "react";
import { X } from "lucide-react";

interface ModalEditarPerfilProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export default function ModalEditarPerfil({
  isOpen,
  onClose,
  onSave,
}: ModalEditarPerfilProps) {
  const [nickname, setNickname] = useState("");
  const [bio, setBio] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Editar perfil</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

      {/* Avatar */}
<div className="mb-6 flex flex-col items-center gap-2">
  <button
    type="button"
    className="
      relative
      h-20 w-20
      rounded-full
      overflow-hidden
      group
    "
  >
    {/* Imagem de fundo */}
    <img
      src="/user.png"
      alt="Avatar"
      className="h-full w-full object-cover"
    />

    {/* Escurecimento */}
    <div
      className="
        absolute inset-0
        bg-black/40
        transition
        group-hover:bg-black/50
      "
    />

    {/* Texto */}
    <span
      className="
        absolute inset-0
        flex items-center justify-center
        text-xs font-medium
        text-white
        z-10
      "
    >
      Trocar perfil
    </span>
  </button>
</div>

        {/* Nickname */}
        <input
          type="text"
          placeholder="Trocar Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="mb-4 w-full rounded-full bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Bio */}
        <textarea
          placeholder="Coloque sobre você aqui."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="h-40 w-full resize-none rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-full border border-pink-400 px-6 py-2 text-sm text-pink-500 hover:bg-pink-50"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className="rounded-full bg-pink-400 px-6 py-2 text-sm font-medium text-white hover:bg-pink-500"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
