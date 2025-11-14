import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import NossasAcoes from './Components/NossasAcoes';
import QuemSomos from './Components/QuemSomos';
import History from './Components/Historia';


export default function Page() {
    return (
        <div>
            <div
                className="flex flex-col min-h-screen"
                style={{
                    minHeight: '100vh',
                    paddingBottom: '50px',
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                }}
            >
                <Header />

                <div className="flex grow items-center justify-center">
                    <HeroSection />
                </div>

            </div>

            <main className="flex flex-col justify-center items-center bg-white text-gray-800 p-8 bg-linear-to-b from-white via-white/10% to-[#005575]">
                <QuemSomos />

                <div
                    className="w-full min-h-[500px] bg-cover bg-center bg-fixed flex items-center justify-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/background2.png')`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <History />
                </div>

                <NossasAcoes />
            </main>
            <Footer />
        </div>
    );
}