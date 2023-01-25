import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import OrderTable from '../components/OrderTable';

const testidSeller = 'customer_checkout__select-seller';

export default function Checkout() {
  const { seller, setSeller } = useState('');

  const history = useHistory();

  const selectSeller = () => {
    const item = testidSeller.map((e, index) => (
      <option
        key={ index }
        value={ `${e.id}` }
      >
        {e.name}
      </option>
    ));
    return item;
  };

  const redirectToCustomerOrders = (id) => {
    url = `/customers/orders${id}`;
    history.push(url);
  };

  const saleStatus = () => {
    const item = {
      status: 'Pendente',
    };
    redirectToCustomerOrders(item);
  };

  return (
    <main>
      <Navbar />
      <OrderTable />
      <form>
        <p data-testid="customer_checkout__element-order-total-price">
          Total:
        </p>

        <h4> Detalhes e Endereço para Entrega </h4>

        <label htmlFor="vendedora">
          P. Vendedora Responsável:
          <select
            id="vendedora"
            data-testid="customer_checkout__select-seller"
            value={ seller }
            onChange={ ({ target }) => setSeller(target.value) }
          >
            { selectSeller() }
          </select>
        </label>

        <label htmlFor="endereço">
          Endereço:
          <input
            type="text"
            id="endereço"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="address">
          Número:
          <input
            type="text"
            id="address"
            placeholder="198"
            data-testid="customer_checkout__input-address-number"
          />
        </label>

        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ saleStatus }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </main>
  );
}
