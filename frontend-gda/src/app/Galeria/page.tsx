import GaleriaBoard from "../Components/GaleriaBoard";
import Header from "../Components/Header";

export default function Galeria() {
    return (
        <div className="w-full min-h-screen bg-[#00141a]" style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "url('/background2.png') ",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}>
            
            {/* Header fixado no topo */}
            <Header />

            {/* Container central do conteúdo */}
            <div className="flex justify-center items-start w-full mt-10 px-4">
                <GaleriaBoard />
            </div>

        </div>
    );
}
