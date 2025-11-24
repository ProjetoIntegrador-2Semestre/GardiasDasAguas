import Card from "./UI/Cards"

export default function UltimosPost() {
    const cards = [
        {
            titulo: "Titulo do Post",
            descricao: "Um pouco do texto do post aqui...",
            imagemUrl: "",
            textoBotao: "Ler mais",
            linkBotao: "/post/1",
            tema: "Tema",
            data: "12/12/2025",
            autor: "Author"
        },
        {
            titulo: "Titulo do Post",
            descricao: "Um pouco do texto do post aqui...",
            imagemUrl: "",
            textoBotao: "Ler mais",
            linkBotao: "/post/2",
            tema: "Tema",
            data: "12/12/2025",
            autor: "Author"
        },
        {
            titulo: "Titulo do Post",
            descricao: "Um pouco do texto do post aqui...",
            imagemUrl: "",
            textoBotao: "Ler mais",
            linkBotao: "/post/3",
            tema: "Tema",
            data: "12/12/2025",
            autor: "Author"
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="border-2 border-white bg-white/10 rounded-[30px] p-8 backdrop-blur-sm">
                <h2 className="text-white text-2xl font-bold mb-6">Ultimos Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Card (Left) */}
                    <div className="md:col-span-1">
                        <div className="h-full">
                            <Card
                                titulo={cards[0].titulo}
                                descricao={cards[0].descricao}
                                imagemUrl={cards[0].imagemUrl}
                                textoBotao={cards[0].textoBotao}
                                linkBotao={cards[0].linkBotao}
                                tema={cards[0].tema}
                                data={cards[0].data}
                                autor={cards[0].autor}
                            />
                        </div>
                    </div>

                    {/* Small Cards (Right) */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <Card
                            titulo={cards[1].titulo}
                            descricao={cards[1].descricao}
                            imagemUrl={cards[1].imagemUrl}
                            textoBotao={cards[1].textoBotao}
                            linkBotao={cards[1].linkBotao}
                            tema={cards[1].tema}
                            data={cards[1].data}
                            autor={cards[1].autor}
                            variant="reduced"
                        />
                        <Card
                            titulo={cards[2].titulo}
                            descricao={cards[2].descricao}
                            imagemUrl={cards[2].imagemUrl}
                            textoBotao={cards[2].textoBotao}
                            linkBotao={cards[2].linkBotao}
                            tema={cards[2].tema}
                            data={cards[2].data}
                            autor={cards[2].autor}
                            variant="reduced"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}