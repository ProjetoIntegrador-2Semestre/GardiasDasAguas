"use client"
import MiniImage from "./MiniImage";

export default function GaleriaBoard() {
    return (
        <div className="bg-white/10 backdrop-blur-[4px] border border-white w-[90vw] h-[80vh] flex flex-col rounded-2xl p-4">

            {/* DIV branca */}
            <div className="bg-white w-full h-full rounded-xl p-6 flex flex-col">

                {/* Título */}
                <h1 className="text-black text-2xl mb-6">Galeria</h1>

                {/* Área com scroll */}
                <div className="overflow-y-auto pr-2">

                    {/* Grid das imagens */}
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <MiniImage /><MiniImage /><MiniImage /><MiniImage />
                        <MiniImage /><MiniImage /><MiniImage /><MiniImage />
                        <MiniImage /><MiniImage /><MiniImage /><MiniImage />
                        <MiniImage /><MiniImage /><MiniImage />
                    </div>

                </div>

            </div>
        </div>
    );
}
