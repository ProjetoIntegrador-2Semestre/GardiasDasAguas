export default function Footer() {
    return (
        <div className="flex items-center justify-between p-6 bg-[#005575] text-white">
            <div className="flex justify-start gap-4">
                <img src="/insta.png" alt="instagram" className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
                <img src="/facebook.png" alt="facebook" className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
                <img src="/whatsapp.png" alt="whatsapp" className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-row gap-8 text-sm font-light">
                <h3>(15) 9999-9999</h3>
                <h3>Algumemail@gmail.com</h3>
            </div>
        </div>
    )
}