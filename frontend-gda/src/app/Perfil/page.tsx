'use client'

import Header from "../Components/Header"
import PerfilCard from "../Components/PerfilCard"
import Footer from "../Components/Footer"

export default function Perfil(){
    return(
        
        <div className="justify-center items-center"
     style={{
                   
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')" ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                }}>
            <Header />
            <div className="justify-center items-center flex flex-grow min-h-screen">


             <PerfilCard />

            </div>
            <div className="mt-15">
                 <Footer />
            </div>
           
            
        </div>
    )
}