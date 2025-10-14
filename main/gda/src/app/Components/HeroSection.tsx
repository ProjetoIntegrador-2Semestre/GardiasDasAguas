"use client"

export default function Header(){
    return (
        <div className="flex justify-center flex-col border-2 border-white w-[80vh] h-[60vh] gap-5 p-5 rounded-lg text-white">
            <h2>Guardando o futuro das águas juntos pela sustentabilidade.</h2>
            <h4>Guardiãs das Águas é uma iniciativa que une educação, ciência e comunidade para promover a conscientização sobre saneamento básico e preservação dos recursos hídricos. Com protagonismo feminino e juvenil, o projeto leva conhecimento a escolas e comunidades, fortalecendo a sustentabilidade e o cuidado com a vida através da água.</h4>
            <button className="bg-[#FF62C8] w-[20vh] rounded-full transition duration-300 hover:scale-110 text-white">Conheça o projeto</button>
        </div>
    )
}