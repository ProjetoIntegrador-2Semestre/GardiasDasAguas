import Header from "../Components/Header"
import UltimosPost from "../Components/UltimosPost"
import AllPublications from "../Components/AllPublications"
import Footer from "../Components/Footer"

export default function Feed() {
    return (
        <div className="flex flex-col min-h-screen"
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

            <main className="flex-grow flex flex-col gap-10 pb-20">
                <UltimosPost />
                <AllPublications />
            </main>

            <Footer />
        </div>
    )
}