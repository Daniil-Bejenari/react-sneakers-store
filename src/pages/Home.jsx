import React from 'react';
import Card from '../components/Card';

const Home = ({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  clearInput,
}) => {
  return (
    <div className="content">
      <div className="content-header">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кросовки`}
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
        {items
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
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
