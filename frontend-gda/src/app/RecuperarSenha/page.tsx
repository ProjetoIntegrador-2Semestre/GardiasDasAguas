'use client'

import { useRouter } from 'next/navigation';

export default function RecuperarSenhaEmail() {
  const router = useRouter();

  const handleEnviar = () => {
    // Aqui você pode colocar a lógica de envio de email
    // Depois redireciona para a página de login
    router.push('/EsqueciASenha');
  };

  return (
    <div
      className="flex justify-center items-center flex-grow min-h-screen"
      style={{
        minHeight: '100vh',
        paddingBottom: '50px',
        backgroundImage: "url('/background2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="bg-white w-[420px] h-[520px] rounded-3xl shadow-2xl p-8 flex flex-col relative">

        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Recuperar senha
        </h2>

        {/* Campo de email */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 text-sm">Insira seu email.</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <p className="text-gray-600 text-sm py-5">Verifique seu email.</p>
        </div>

        {/* Espaço flexível para empurrar o botão para baixo */}
        <div className="flex-grow"></div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-end">
            <button
              onClick={handleEnviar}
              className="bg-pink-400 hover:bg-pink-500 transition text-white w-32 py-2 rounded-full shadow-md"
            >
              Enviar
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => router.push('/Login')}
              className="text-gray-600 hover:text-gray-800 text-sm transition"
            >
              Voltar ao Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
