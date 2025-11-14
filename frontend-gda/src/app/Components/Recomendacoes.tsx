'use client'
import Card from "./UI/Cards"

export default function Recomendacoes() {

    const cards = [
        {
            titulo: "Projeto React Simples",
            descricao:
                "Um projeto inicial para aprender os fundamentos de componentes e props.",
            imagemUrl: "/folginho.png",
            textoBotao: "Ler mais",
            linkBotao: "/post/projeto-react-simples",
        },
        {
            titulo: "API com FastAPI",
            descricao:
                "Criação de uma API local utilizando FastAPI e Docker para processar imagens.",
            imagemUrl: "/api.png",
            textoBotao: "Ler mais",
            linkBotao: "/post/api-fastapi",
        },
        {
            titulo: "Dashboard Neomórfico",
            descricao:
                "Interface moderna para monitoramento de sensores em tempo real.",
            imagemUrl: "/dashboard.png",
            textoBotao: "Ler mais",
            linkBotao: "/post/dashboard-neomorfico",
        },
        {
            titulo: "Automação com Node-RED",
            descricao:
                "Fluxos de automação para coleta e análise de dados em tempo real.",
            imagemUrl: "/nodered.png",
            textoBotao: "Ler mais",
            linkBotao: "/post/automacao-nodered",
        },
    ];

    return (
        <div className="pb-10">
            <h2 className="p-8">Sistema de recomendações</h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center max-w-[1600px]"
            >
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        imagemUrl={card.imagemUrl}
                        textoBotao={card.textoBotao}
                        linkBotao={card.linkBotao}
                    />
                ))}
            </div>
        </div>
    )
}