import { Calendar, Heart, MessageCircle } from "lucide-react";

export default function MiniCard() {
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

        /* animações */
        transition-all duration-200 
        hover:scale-105 
        active:scale-95 
        active:brightness-90
        cursor-pointer
      "
    >
      {/* Header / Tema */}
      <div className="flex justify-end w-full mb-3">
        <div className="bg-[#8F005D] text-white px-4 py-1 rounded-full text-sm">
          Tema
        </div>
      </div>

      {/* Thumbnail */}
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

      {/* Título + Data */}
      <div className="text-center mt-3 w-full">
        <p className="font-semibold text-black text-lg">
          Título do Post
        </p>

        <div className="flex justify-center items-center gap-2 text-black/40 text-sm mt-1">
          <Calendar size={16} />
          <span>12/12/2025</span>
        </div>
      </div>

      {/* Likes / Comments */}
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
    </div>
  );
}
