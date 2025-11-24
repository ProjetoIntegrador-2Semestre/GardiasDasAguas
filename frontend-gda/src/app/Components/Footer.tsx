export default function Footer() {
    return (
        <div className="flex items-center justify-between px-12 py-8 bg-[#005575] text-white border-t border-white/10">
            <div className="flex justify-start gap-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-110 transition-transform">
                    <img src="/insta.png" alt="instagram" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-110 transition-transform">
                    <img src="/facebook.png" alt="facebook" className="w-full h-full object-contain" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-110 transition-transform">
                    <img src="/whatsapp.png" alt="whatsapp" className="w-full h-full object-contain" />
                </div>
            </div>
            <div className="flex flex-row gap-12 text-sm font-light tracking-wider">
                <h3>(15) 9999-9999</h3>
                <h3>Algumemail@gmail.com</h3>
            </div>
        </div>
    )
}