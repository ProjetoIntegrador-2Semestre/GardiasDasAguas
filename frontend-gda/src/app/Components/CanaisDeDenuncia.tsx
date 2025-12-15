"use client";

import { useState } from "react";

interface Canal {
  id: number;
  nome: string;
  telefone: string;
  localizacao: string;
  descricao: string;
  site: string;
}


const canais: Canal[] = [
  {
    id: 1,
    nome: "ANA – Agência Nacional de Águas e Saneamento Básico",
    telefone: "(61) 2109-5662",
    localizacao: "Brasil",
    descricao:
      "Órgão federal responsável pela gestão dos recursos hídricos. Recebe denúncias relacionadas a usos irregulares da água, barramentos ilegais e impactos em corpos hídricos de interesse nacional.",
    site: "https://www.gov.br/ana/pt-br",
  },
  {
    id: 2,
    nome: "CAGECE – Ceará",
    telefone: "0800 275 0195",
    localizacao: "Juazeiro do Norte / CE",
    descricao:
      "Atende ocorrências de vazamentos na rua, falta de água e desperdício na rede pública nos municípios atendidos pela CAGECE.",
    site: "https://www.cagece.com.br",
  },
  {
    id: 3,
    nome: "DESO – Sergipe",
    telefone: "0800 079 0195",
    localizacao: "Aracaju / SE",
    descricao:
      "Canal para registro de problemas de abastecimento, vazamentos externos e esgoto a céu aberto nos municípios atendidos pela DESO.",
    site: "https://www.deso-se.com.br",
  },
  {
    id: 4,
    nome: "Águas Cuiabá – Mato Grosso",
    telefone: "0800 647 6060",
    localizacao: "Cuiabá / MT",
    descricao:
      "Responsável pelo saneamento em Cuiabá. Atende denúncias de vazamento urbano, problemas de esgoto e drenagem, além do uso indevido da rede pública.",
    site: "https://igua.com.br/cuiaba",
  },
  {
    id: 5,
    nome: "CORSAN – Rio Grande do Sul",
    telefone: "0800 646 6444",
    localizacao: "Rio Grande / RS",
    descricao:
      "Atende ocorrências de vazamento em via pública, desperdício de água e esgoto irregular em municípios atendidos pela CORSAN.",
    site: "https://www.corsan.com.br",
  },
  {
    id: 6,
    nome: "DMAE – Uberlândia (MG)",
    telefone: "0800 942 0140",
    localizacao: "Uberlândia / MG",
    descricao:
      "Canal para registro de problemas hidráulicos urbanos, vazamentos externos e falhas no abastecimento de água no município de Uberlândia.",
    site: "https://www.uberlandia.mg.gov.br/dmae",
  },
  {
    id: 7,
    nome: "CODAU – Uberaba (MG)",
    telefone: "0800 940 0101",
    localizacao: "Uberaba / MG",
    descricao:
      "Responsável pelo saneamento em Uberaba. Atende ocorrências de vazamentos externos, falhas no abastecimento e outros problemas na rede pública de água e esgoto.",
    site: "https://www.codau.com.br",
  },
  {
    id: 8,
    nome: "IBAMA – Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
    telefone: "0800 618080",
    localizacao: "Brasil",
    descricao:
      "Canal nacional para denúncias de crimes ambientais, poluição de rios e solos e atividades ilegais com impacto ambiental.",
    site: "https://www.gov.br/ibama",
  },
];

export default function CanaisDeDenuncia() {
  const [canalAtivo, setCanalAtivo] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6">
      <div className="bg-white text-black rounded-2xl p-10 w-full max-w-5xl min-h-[80vh] shadow-2xl">
        <h1 className="text-3xl font-semibold mb-8">
          Canais de Denúncia
        </h1>

        {/* Área scrollável */}
        <div className="max-h-[65vh] overflow-y-auto flex flex-col gap-5 pr-3">
          {canais.map((canal) => {
            const ativo = canalAtivo === canal.id;

            return (
              <div
                key={canal.id}
                onClick={() =>
                  setCanalAtivo(ativo ? null : canal.id)
                }
                className={`
                  cursor-pointer rounded-xl border transition-all duration-300
                  ${
                    ativo
                      ? "bg-pink-50 border-pink-400 p-5"
                      : "bg-gray-50 border-gray-200 p-4 hover:bg-gray-100"
                  }
                `}
              >
                {/* Cabeçalho */}
                <div className="flex items-center justify-between gap-6">
                  <span className="font-medium text-base">
                    {canal.nome}
                  </span>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {canal.telefone}
                  </span>
                </div>

                {/* Conteúdo expandido */}
                {ativo && (
                  <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <p>
                      <strong>Telefone:</strong> {canal.telefone}
                    </p>
                    <p>
                      <strong>Localização:</strong> {canal.localizacao}
                    </p>
                    <p>{canal.descricao}</p>
                    <p>
  <strong>Site oficial:</strong>{" "}
  <a
    href={canal.site}
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-600 underline hover:text-pink-700"
    onClick={(e) => e.stopPropagation()}
  >
    Acessar site
  </a>
</p>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
