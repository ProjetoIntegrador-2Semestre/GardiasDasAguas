"use client"

export default function Thumbnail() {
    return (
        <div className="flex justify-center flex-col border-2 border-white w-[80vh] h-[60vh] rounded-lg text-white bg-white/10 backdrop-blur-[4px]">
            <img 
                src="folginho.png" 
                alt="golfinho" 
                className="w-full h-full object-cover rounded-lg border-2 border-white"
            />
        </div>
    )
}