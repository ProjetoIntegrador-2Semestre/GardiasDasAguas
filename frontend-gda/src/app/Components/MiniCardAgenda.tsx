"use client";

import { Calendar } from "lucide-react";

interface MiniCardAgendaProps {
    title?: string;
    date?: string;
    thumbnail?: string;
    onClick?: () => void; // MUITO MELHOR ASSIM
}

export default function MiniCardAgenda({
    title = "Título do Evento",
    date = "12/12/2025",
    thumbnail = "/thumbnail.png",
    onClick,
}: MiniCardAgendaProps) {
    return (
        <div
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (onClick && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onClick();
                }
            }}
            className="
                bg-[#E6E6E6]
                w-full
                rounded-2xl
                flex flex-col
                p-4
                shadow-xl
                transition-all duration-200
                hover:scale-105
                active:scale-95
                active:brightness-90
                cursor-pointer
            "
        >
            {/* THUMBNAIL */}
            <div
                className="
                    w-full 
                    h-[140px] sm:h-[160px] md:h-[180px]
                    rounded-xl 
                    overflow-hidden 
                    bg-[#CCCCCC] 
                    flex justify-center items-center
                "
            >
                <img
                    src={thumbnail}
                    alt="Thumbnail Agenda"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* TÍTULO */}
            <p className="font-semibold text-black text-lg mt-3">
                {title}
            </p>

            {/* DATA */}
            <div className="flex items-center gap-2 text-black/40 text-sm mt-1">
                <Calendar size={16} />
                <span>{date}</span>
            </div>
        </div>
    );
}
