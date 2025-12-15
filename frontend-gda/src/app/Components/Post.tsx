"use client"

interface PostProps {
    titulo?: string;
    descricao?: string;
    imagemUrl?: string;
}

export default function Post({
    titulo = "Titulo do post",
    descricao = "Lorem ipsum dolor sit amet...",
    imagemUrl = "/wukong.png"
}: PostProps) {
    return (
        <div className="rounded-4xl">
            <div className="flex flex-col items-start p-8 text-left">
                <h1 className="text-3xl font-bold mb-4 text-black">{titulo}</h1>
                <div className="text-gray-800 text-lg whitespace-pre-wrap">
                    {descricao}
                </div>
            </div>

            {imagemUrl && (
                <div className="flex justify-center my-6">
                    <img src={imagemUrl} alt="Post content" className="rounded-xl border-2 border-black max-h-[500px] object-cover" />
                </div>
            )}

        </div>
    )
}
