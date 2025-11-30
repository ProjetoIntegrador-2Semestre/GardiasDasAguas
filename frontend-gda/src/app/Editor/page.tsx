import EditorComponent from "../Components/EditorComponent";

export default function Editor() {
  return (
    <div
      className="flex flex-col items-center p-10 min-h-screen w-full"
      style={{
        backgroundImage: "url('/background2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* CONTAINER CENTRAL */}
      <div className="w-full max-w-[1500px] flex flex-col gap-6">

        {/* TÍTULO + INPUT */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-4xl font-semibold">
            Criar um novo Post
          </h1>

          <input
            className="bg-white w-full h-[55px] rounded-2xl px-4 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FF62C8]"
            type="text"
            placeholder="Digite o titulo do seu post"
          />
        </div>

        {/* EDITOR CENTRALIZADO */}
        <div className="w-full flex justify-center">
          <EditorComponent />
        </div>
      </div>
    </div>
  );
}
