import { Calendar, Eye, Pencil, Trash2, Heart, MessageCircle } from "lucide-react";

interface MiniCardProps {
  variant?: "default" | "editor";
  status?: "publico" | "privado";
  titulo?: string;
  data?: string;
  onDelete?: () => void;
}

export default function MiniCard({
  variant = "default",
  status = "publico",
  titulo = "Título do Post",
  data = "12/12/2025",
  onDelete
}: MiniCardProps) {
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

      {/* ─────────────────────────────────────────────
          HEADER (Tema + status quando estiver no modo Editor)
      ───────────────────────────────────────────── */}
      <div className="flex justify-between items-center w-full mb-3">

        {/* STATUS — apenas na versão Editor */}
        {variant === "editor" && (
          <span
            className={`
              text-sm font-semibold
              ${status === "publico" ? "text-pink-600" : "text-black/50"}
            `}
          >
            {status === "publico" ? "Público" : "Privado"}
          </span>
        )}

        {/* TAG TEMA (sempre aparece) */}
        <div className="bg-[#8F005D] text-white px-4 py-1 rounded-full text-sm">
          Tema
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          THUMBNAIL
      ───────────────────────────────────────────── */}
      <div
        className="
          bg-[#CCCCCC] 
          w-full 
          h-[140px] sm:h-[160px] md:h-[180px] 
          rounded-2xl 
          flex justify-center items-center
        "
      >
        <p className="text-black/30 text-sm">Thumbnail</p>
      </div>

      {/* ─────────────────────────────────────────────
          TÍTULO + DATA
      ───────────────────────────────────────────── */}
      <div className="text-center mt-3 w-full">
        <p className="font-semibold text-black text-lg">{titulo}</p>

        <div className="flex justify-center items-center gap-2 text-black/40 text-sm mt-1">
          <Calendar size={16} />
          <span>{data}</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          FOOTER (Dependendo do modo)
      ───────────────────────────────────────────── */}

      {/* MODO DEFAULT — Likes e Comentários */}
      {variant === "default" && (
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex items-center gap-1 text-black/70">
            <Heart size={20} />
            <span>10</span>
          </div>

          <div className="flex items-center gap-1 text-black/70">
            <MessageCircle size={20} />
            <span>10</span>
          </div>
        </div>
      )}

      {/* MODO EDITOR — Editar, Visualizar, Excluir */}
      {variant === "editor" && (
        <div className="flex justify-between items-center w-full mt-4 px-2">
          <button className="text-black/70 hover:text-black">
            <Pencil size={20} />
          </button>

          <button className="text-black/70 hover:text-black">
            <Eye size={20} />
          </button>

          <button
            className="text-black/70 hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
          >
            <Trash2 size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
