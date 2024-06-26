import Card from '../components/Card';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faVenus } from '@fortawesome/free-solid-svg-icons';

const Home = ({
  searchValue,
  clearInput,
  onChangeSearchInput,
  onAddToCart,
  onFavorite,
  cartItems,
  setGenderFilter,
  genderFilter,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://666889f4f53957909ff86aca.mockapi.io/items')
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  const handleFilterByGender = (gender) => {
    setGenderFilter(gender);
  };

  const filteredItems = items
    .filter((item) => {
      if (genderFilter === 'male') {
        return item.name.toLowerCase().includes('мужские');
      } else if (genderFilter === 'female') {
        return item.name.toLowerCase().includes('женские');
      }
      return true;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

  return (
    <div className="content">
      <div className="content-header">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>

        <div className="search-block">
          <FontAwesomeIcon
            onClick={() => handleFilterByGender('male')}
            icon={faMars}
            size="2xl"
            className="icons mars"
          />

          <FontAwesomeIcon
            onClick={() => handleFilterByGender('female')}
            icon={faVenus}
            size="2xl"
            className="icons venus"
          />

          <div className="search-input">
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
      </div>

      <div className="sneakers">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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
