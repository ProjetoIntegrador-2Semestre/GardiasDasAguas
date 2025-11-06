import Header from "../Components/Header"
import Thumbnail from "../Components/Thumbnail"
import Post from "../Components/Post"
import Footer from "../Components/Footer"


export default function Page() {
    return (
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


            <div className="h-screen flex items-center justify-center">
                <Thumbnail />
            </div>

            <div className="bg-white rounded-t-3xl mt-[-2rem] z-10 relative">
                <Post />
                <Footer />
            </div>
        </div>
    );
}
