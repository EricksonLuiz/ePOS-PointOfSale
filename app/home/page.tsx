import Carrinho from "../_componentes/Carrinho";

export default function Home() {
  return (
    <div className="flex">
      <div className="min-h-screen w-3/4 bg-vermelho ">
        <p>conteudo</p>
      </div>
      <div className="min-h-screen w-1/4">
        <Carrinho />
      </div>
    </div>
  );
}
