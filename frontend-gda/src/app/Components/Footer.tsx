export default function Footer() {
    return (
        <div className="flex items-center justify-between p-4 border-white border-2 text-white rounded-t-lg">
            <div className="flex justify-around gap-2">
                <img src="/insta.png" alt="instagram" className="w-[5vw] h-[9vh]" />
                <img src="/facebook.png" alt="facebook" className="w-[4vw] h-[8vh]" />
                <img src="/whatsapp.png" alt="facebook" className="w-[4vw] h-[8vh]" />
            </div>
            <div className="flex flex-row gap-5">
                <h3>(15) 9999-9999</h3>
                <h3>Algumemail@gmail.com</h3>
            </div>
        </div>
    )
}