import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.scss';
import React, { useEffect } from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);

  useEffect(() => {
    fetch('https://666889f4f53957909ff86aca.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const onClickRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClickCloseCart={() => setCartOpened(false)}
          onClickRemoveItem={onClickRemoveItem}
        ></Drawer>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)}></Header>

      <div className="content">
        <div className="conent-header">
          <h1>
            {' '}
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : `Все кросовки`}
          </h1>
          <div className="search-block">
            <img src="/img/loop.svg" alt="search"></img>
            {searchValue && (
              <img
                onClick={clearInput}
                className="search-clear"
                src="/img/btn-removed.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search"
            ></input>
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue))
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={onAddToCart}
              ></Card>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
