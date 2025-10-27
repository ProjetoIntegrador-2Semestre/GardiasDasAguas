'use client'

export default function QuemSomos() {
    return (
        <div className="p-8">
            <h1 className=" flex justify-center text-4xl font-bold mb-8">Quem somos?</h1>
            <div className="flex flex-col md:flex-row gap-10 items-start">

                <div className="md:w-3/5">
                    <h3 className="text-lg leading-relaxed text-gray-700">
                        O Guardiãs das Águas é um projeto educacional e social que busca fortalecer a conscientização sobre saneamento básico, preservação dos recursos hídricos e sustentabilidade. Desenvolvido com foco em escolas e comunidades, o projeto valoriza o protagonismo juvenil e feminino na ciência e nas engenharias, promovendo ações que unem educação, pesquisa e cidadania.
                        Nossa missão é inspirar e capacitar pessoas para cuidarem da água e do meio ambiente, construindo um futuro mais justo, saudável e sustentável para todos.
                    </h3>
                </div>

                <div
                    className="md:w-2/5 w-[50vw] h-[50vh] bg-gray-200 flex items-center justify-center rounded-lg shadow-lg"
                    style={{
                        backgroundImage: "url('/folginho.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
            </div>
        </div>
    )
}