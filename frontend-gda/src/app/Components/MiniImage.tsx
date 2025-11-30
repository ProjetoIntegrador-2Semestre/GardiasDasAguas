// MiniImage.tsx
import type { MouseEventHandler } from "react";

type MiniImageProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function MiniImage({ onClick }: MiniImageProps) {
  return (
    <div
      className="w-[15vw] aspect-square bg-gray-300 flex items-center justify-center text-center rounded-lg cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick?.(e as any); }}
      aria-label="Abrir imagem"
    >
      ALGUMA
      <br />
      IMAGEM AQUI!!
    </div>
  );
}
