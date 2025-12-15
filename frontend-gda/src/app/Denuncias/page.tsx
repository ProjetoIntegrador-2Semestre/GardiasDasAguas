import Header from "../Components/Header";
import CanaisDeDenuncia from "../Components/CanaisDeDenuncia";

export default function Denuncias() {
  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/background2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Header ocupa apenas o espaço dele */}
      <Header />

      {/* Conteúdo ocupa TODO o resto da tela */}
      <div className="flex-1 flex items-center justify-center px-4">
        <CanaisDeDenuncia />
      </div>
    </div>
  );
}
