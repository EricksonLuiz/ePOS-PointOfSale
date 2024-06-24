import Itens from "./Itens";

function Carrinho() {
  return (
    <div className="w-full rounded-md bg-b5 p-4 text-xs font-medium">
      <p className="text-texto3">carrinho: 0000</p>
      <div id="listaItens">
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
      </div>
      <div id="pagamento" className="rounded-md bg-b4 p-4">
        <div className="flex justify-between">
          <p>Desconto:</p> <p>R$ 62,00</p>
        </div>
        <div className="flex justify-between">
          <p>Sub-Total:</p> <p>R$ 62,00</p>
        </div>

        <div className="flex justify-between">
          <p>Total:</p> <p>R$ 62,00</p>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
