'use client'

import LoginCard from "../Components/LoginCard"

export default function Login() {
  return (
    <div className="justify-center items-center flex grow min-h-screen"
      style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}>

      <LoginCard />

    </div>
  )
}
