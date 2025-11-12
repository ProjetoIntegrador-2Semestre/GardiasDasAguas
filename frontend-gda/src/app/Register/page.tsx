'use client'

import RegisterCard from "../Components/RegisterCard"

export default function Login() {
  return (
    <div className="justify-center items-center flex grow min-h-screen"
      style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "url('/background2.png') ",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}>

      <RegisterCard />

    </div>
  )
}
