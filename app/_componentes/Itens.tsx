import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Itens() {
  return (
    <div className="my-2 flex items-center justify-between rounded-sm border-0 bg-b2 p-2 text-texto2">
      <span id="deletarItem" className="w-3 cursor-pointer text-vermelho">
        <FontAwesomeIcon icon={faTrashCan} />
      </span>
      <span id="nomeItem" className="ml-3 mr-3">
        Nome do Produto
      </span>
      <span id="quantidadeItem" className="ml-3">
        x 2
      </span>
      <span id="valorUnitarioItem" className="ml-3">
        R$ 3,60 un.
      </span>
      <span id="valorTotalItem" className="ml-3 text-vermelho">
        R$ 7,20
      </span>
    </div>
  );
}

export default Itens;
