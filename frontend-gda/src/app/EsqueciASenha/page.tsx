'use client'

import { useRouter } from 'next/navigation'

export default function EsqueciASenha() {
  const router = useRouter();

  const handleConfirm = () => {
    // Aqui você pode colocar a lógica de reset de senha
    // Depois redireciona para a página de login
    router.push('/');
  }

  return (
    <div
      className="flex justify-center items-center flex-grow min-h-screen"
      style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="bg-white w-[420px] h-[520px] rounded-3xl shadow-2xl p-8 flex flex-col gap-6">

        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Redefinir Senha
        </h2>



        {/* Nova senha */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 text-sm">Nova senha.</label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Confirmar senha */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 text-sm">Confirmar senha.</label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div className="flex-grow"></div>

        <div className="flex justify-end">
          <button
            onClick={handleConfirm}
            className="bg-pink-400 hover:bg-pink-500 transition text-white w-32 py-2 rounded-full shadow-md"
          >
            Confirmar
          </button>
        </div>





      </div>
    </div>
  );
}
