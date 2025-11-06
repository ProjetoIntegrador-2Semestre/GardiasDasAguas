'use client'

import LoginCard from "../Components/LoginCard"

export default function Login() {
  return (
    <div className="justify-center items-center flex flex-grow min-h-screen"
      style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "url('/background2.png') ",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}>

      <LoginCard />

    </div>
  )
}
