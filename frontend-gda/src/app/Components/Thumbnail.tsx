"use client"

interface ThumbnailProps {
    imagemUrl?: string;
}

export default function Thumbnail({ imagemUrl = "/folginho.png" }: ThumbnailProps) {
    return (
        <div className="flex justify-center flex-col border-2 border-white w-[80vh] h-[60vh] rounded-lg text-white bg-white/10 backdrop-blur-xs shadow-lg">
            <img
                src={imagemUrl || "/folginho.png"}
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-lg border-2 border-white"
            />
        </div>
    )
}