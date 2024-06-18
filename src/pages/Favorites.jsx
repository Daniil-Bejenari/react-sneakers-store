import React from 'react';
import Card from '../components/Card';

const Favorites = ({ items, onFavorite, onAddToCart }) => {
  return (
    <div className="content">
      <div className="content-header">
        <h2>Мои Закладки</h2>
      </div>

      <div className="sneakers">
        {items.length > 0 ? (
          items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={onFavorite}
              isFavorite={true}
              onPlus={onAddToCart}
            />
          ))
        ) : (
          <p>Нет закладок.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
