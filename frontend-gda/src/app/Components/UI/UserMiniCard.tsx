import { Calendar, Trash2, User } from "lucide-react";

interface UserMiniCardProps {
    nome?: string;
    tipoUsuario?: string;
    fotoPerfil?: string;
    onDelete?: () => void;
}

export default function UserMiniCard({
    nome = "Nome do Usuário",
    tipoUsuario = "Leitor",
    fotoPerfil,
    onDelete
}: UserMiniCardProps) {
    return (
        <div
            className="
        bg-[#E6E6E6] 
        w-full max-w-[250px] 
        h-auto 
        rounded-2xl 
        flex flex-col 
        py-4 px-3 
        shadow-xl
        transition-all duration-200 
        hover:scale-105 
        active:scale-95 
        active:brightness-90
        cursor-pointer
      "
        >

            {/* HEADER */}
            <div className="flex justify-between items-center w-full mb-3">
                {/* TAG TIPO USUARIO */}
                <div className="bg-[#8F005D] text-white px-4 py-1 rounded-full text-sm">
                    {tipoUsuario}
                </div>
            </div>

            {/* FOTO PERFIL */}
            <div
                className="
          bg-[#CCCCCC] 
          w-full 
          h-[140px] sm:h-[160px] md:h-[180px] 
          rounded-2xl 
          flex justify-center items-center
          overflow-hidden
        "
            >
                {fotoPerfil ? (
                    <img src={fotoPerfil} alt={nome} className="w-full h-full object-cover" />
                ) : (
                    <User size={64} className="text-black/30" />
                )}
            </div>

            {/* NOME */}
            <div className="text-center mt-3 w-full">
                <p className="font-semibold text-black text-lg">{nome}</p>
            </div>

            {/* FOOTER - Botão Excluir */}
            <div className="flex justify-center items-center w-full mt-4 px-2">
                <button
                    className="text-black/70 hover:text-red-600 transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete?.();
                    }}
                    title="Excluir usuário"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
}
