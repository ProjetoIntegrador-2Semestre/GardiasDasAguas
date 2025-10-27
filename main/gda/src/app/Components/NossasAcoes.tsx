"use client";
import Card from "./UI/Cards";

export default function NossasAcoes() {
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
        <section className="w-full px-8 py-12 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-10 text-gray-800">
                Nossas Ações
            </h1>

            <div
                className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-2
            gap-10
            justify-items-center
            max-w-[1600px]
        "
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
        </section>
    );
}
