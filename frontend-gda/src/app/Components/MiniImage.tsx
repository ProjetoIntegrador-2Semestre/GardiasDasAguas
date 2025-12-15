// MiniImage.tsx
import type { MouseEventHandler } from "react";

type MiniImageProps = {
  imageUrl?: string;
  titulo?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function MiniImage({ imageUrl, titulo, onClick }: MiniImageProps) {
  return (
    <div
      className="w-[15vw] aspect-square bg-gray-300 flex items-center justify-center text-center rounded-lg cursor-pointer overflow-hidden hover:scale-105 transition-transform"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick?.(e as any); }}
      aria-label={titulo || "Abrir imagem"}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={titulo || "Imagem da galeria"}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-gray-500 text-sm">
          SEM<br />IMAGEM
        </span>
      )}
    </div>
  );
}

