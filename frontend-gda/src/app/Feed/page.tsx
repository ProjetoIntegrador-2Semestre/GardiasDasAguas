import Header from "../Components/Header"
import UltimosPost from "../Components/UltimosPost"
import AllPublications from "../Components/AllPublications"
import Footer from "../Components/Footer"

export default function Feed() {
    return (
        <div className="flex flex-col min-h-screen"
            style={{
                minHeight: '100vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
            }}
        >
            <Header />

            <main className="grow flex flex-col gap-10 w-full">
                <UltimosPost />
                <AllPublications />
            </main>

            <Footer />
        </div>
    )
}