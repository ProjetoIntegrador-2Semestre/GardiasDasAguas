"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../services/api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // Import Context

export default function Editor() {
  const router = useRouter();
  const { usuario } = useAuth(); // Get current user
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [tema, setTema] = useState('');
  const [tipo, setTipo] = useState('Notícias');
  const [local, setLocal] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImagemUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Protect Route
  useEffect(() => {
    // Should check if it's securely loaded, here checks client-side state
    if (!usuario || (usuario.tipoUsuario !== 'Escritor' && usuario.tipoUsuario !== 'Admin')) {
      // Optional: Redirect
      router.push('/');
    }
  }, [usuario, router]);

  // If unauthorized, could return null or a loader to prevent flash
  if (!usuario || (usuario.tipoUsuario !== 'Escritor' && usuario.tipoUsuario !== 'Admin')) {
    return null;
  }


  const handlePublish = async () => {
    try {
      if (!titulo || !conteudo) {
        alert("Preencha título e conteúdo.");
        return;
      }
      setLoading(true);

      if (tipo === 'Eventos') {
        if (!local || !dataHora) {
          alert("Preencha Local e Data para eventos.");
          setLoading(false);
          return;
        }
        await api.createEvento({
          Titulo: titulo,
          Descricao: conteudo,
          Local: local,
          TextoBotao: tema, // Salvar Tema aqui
          DataHora: new Date(dataHora).toISOString(),
          ImagemUrl: imagemUrl || undefined
        });
        alert("Evento criado com sucesso!");
      } else {
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descricao', conteudo);
        formData.append('textoBotao', tema);
        if (usuario?.id) formData.append('usuarioId', usuario.id.toString());

        if (file) {
          formData.append('arquivo', file);
        } else if (imagemUrl) {
          formData.append('imagemUrl', imagemUrl);
        }

        await api.createPost(formData);
        alert("Post criado com sucesso!");
      }

      router.push('/');
    } catch (err) {
      console.error("Erro ao criar post:", err);
      alert("Erro ao criar post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <Header />

      {/* THUMBNAIL EDITAVEL */}
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <label className="relative flex justify-center flex-col border-2 border-white w-[80vh] h-[60vh] rounded-lg text-white bg-white/10 backdrop-blur-xs shadow-lg overflow-hidden group cursor-pointer hover:border-pink-500 transition-colors">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {imagemUrl ? (
            <img
              src={imagemUrl}
              alt="Thumbnail Preview"
              className="w-full h-full object-cover rounded-lg border-2 border-transparent"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-white/50">
              <ImageIcon size={64} />
              <p>Clique para upload ou insira URL abaixo</p>
            </div>
          )}

          {/* Overlay Input Mock */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <p className="text-white font-bold">Clique para alterar imagem</p>
          </div>
        </label>

        <div className="flex gap-2 w-[80vh]">
          <input
            type="text"
            placeholder="Ou cole a URL da Imagem aqui"
            className="flex-1 p-4 rounded-xl bg-white/90 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-xl"
            value={file ? '' : imagemUrl}
            onChange={(e) => {
              setFile(null);
              setImagemUrl(e.target.value);
            }}
            disabled={!!file}
          />
          {file && (
            <button
              onClick={() => {
                setFile(null);
                setImagemUrl('');
              }}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
            >
              Remover Arquivo
            </button>
          )}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white rounded-t-3xl mt-8 bg-linear-to-b from-white via-white/10% to-[#005575] min-h-[800px] p-12">

        {/* SETTINGS BAR */}
        <div className="flex flex-wrap items-center gap-4 mb-8 border-b border-gray-200 pb-6">

          <div className="flex flex-col">
            <input
              type="text"
              list="temas-sugeridos"
              placeholder="Tema (ex: Notícias)"
              className="bg-gray-100 px-6 py-3 rounded-xl outline-none text-gray-700 font-semibold focus:ring-2 focus:ring-pink-500 w-48"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
            />
            <datalist id="temas-sugeridos">
              <option value="Notícias" />
              <option value="Atualizações" />
              <option value="Eventos" />
              <option value="Tecnologia" />
              <option value="Meio Ambiente" />
            </datalist>
          </div>

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="bg-gray-100 px-6 py-3 rounded-xl outline-none text-gray-700 font-semibold cursor-pointer focus:ring-2 focus:ring-pink-500"
          >
            <option value="Notícias">Tipo: Padrão</option>
            <option value="Eventos">Tipo: Evento</option>
          </select>

          {tipo === 'Eventos' && (
            <>
              <input
                type="text"
                placeholder="Local do Evento"
                className="bg-gray-100 px-6 py-3 rounded-xl text-gray-700 outline-none flex-1 border border-transparent focus:border-pink-500"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
              />
              <input
                type="datetime-local"
                className="bg-gray-100 px-6 py-3 rounded-xl text-gray-700 outline-none border border-transparent focus:border-pink-500"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
              />
            </>
          )}

          <div className="flex-grow"></div>

          <button
            onClick={handlePublish}
            disabled={loading}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:scale-100"
          >
            {loading ? "Publicando..." : "Publicar Post"}
          </button>
        </div>


        {/* EDITABLE POST CONTENT */}
        <div className="rounded-4xl max-w-5xl mx-auto">
          <div className="flex flex-col items-start text-left gap-4">
            <input
              type="text"
              placeholder="Digite o Título do Post..."
              className="text-4xl sm:text-5xl font-extrabold text-black w-full bg-transparent outline-none placeholder-gray-300 border-none p-0 focus:ring-0"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <textarea
              placeholder="Comece a escrever a sua história aqui..."
              className="w-full h-[500px] text-xl text-gray-700 bg-transparent outline-none resize-none placeholder-gray-300 leading-relaxed mt-4 border-none focus:ring-0"
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            />
          </div>
        </div>

        <div className="h-20"></div> {/* Spacer */}

      </div>
    </div>
  );
}
