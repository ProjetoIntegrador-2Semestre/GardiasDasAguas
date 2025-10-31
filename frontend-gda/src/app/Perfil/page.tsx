'use client'

import Header from "../Components/Header"
import PerfilCard from "../Components/PerfilCard"
import Footer from "../Components/Footer"

export default function Perfil(){
    return(
        <div>
            <Header />
            <div className="justify-center items-center flex flex-grow min-h-screen">


             <PerfilCard />

            </div>
            <Footer />
            
        </div>
    )
}