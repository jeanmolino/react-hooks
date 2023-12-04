import React, {useMemo, useState} from 'react';

interface FinancialRegister {
  price: number,
  name: string
}

interface AmountProps {
  amount: number,
}

const Amount = React.memo(({amount}: AmountProps) => {
  console.debug("Amount render");
  return <p>Preço Total: R${amount.toFixed(2)}</p>;
})

const UseMemoComponent = () => {
  const [items, setItems] = useState<Array<FinancialRegister>>([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);

  const handleAddItem = () => {
    if (productName && price > 0) {
      const newItem = { name: productName, price: price } as FinancialRegister;
      setItems((prevItems) => [...prevItems, newItem]);
      setProductName('');
      setPrice(0);
    } else {
      alert('Por favor, insira um nome de produto e preço válido.');
    }
  };

  const amount = useMemo(() => items.reduce((total, item) => total + item.price, 0), [items]);

  return (
    <div>
      <h2>Entradas Financeiras</h2>
      <div>
        <label htmlFor="productName">Nome do Produto:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <button onClick={handleAddItem}>Adicionar</button>
      <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center'}}>
        <h3>Lista de Entradas Financeiras:</h3>
        <ul style={{listStyle: 'none'}}>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <Amount amount={amount}/>
      </div>
    </div>
  );
};

export default UseMemoComponent;
