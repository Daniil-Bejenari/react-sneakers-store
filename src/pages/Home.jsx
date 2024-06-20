import Card from '../components/Card';
import React, { useEffect, useState } from 'react';

const Home = ({
  searchValue,
  clearInput,
  onChangeSearchInput,
  onAddToCart,
  onFavorite,
  cartItems,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://666889f4f53957909ff86aca.mockapi.io/items')
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="content">
      <div className="content-header">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block">
          <img src="/img/loop.svg" alt="search" />
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
          />
        </div>
      </div>

      <div className="sneakers">
        {items.length > 0 ? (
          items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={onAddToCart}
                onFavorite={onFavorite}
                added={cartItems.some((obj) => obj.id === item.id)}
              />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
