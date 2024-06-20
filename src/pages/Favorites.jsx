import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router';

const Favorites = ({ items, onFavorite, onAddToCart }) => {
  const navigate = useNavigate();

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
          <div className="empty-favorites">
            <img
              width="70"
              height="70"
              src="./img/sad-smile.svg"
              alt="sadSmile"
            />
            <h2>У вас нет заказов</h2>
            <p>Оформите хотя бы один заказ.</p>

            <button
              onClick={() => navigate('/')}
              className="greenButton favorites"
            >
              Вернуться назад
              <img
                className="left-arrow"
                src="/img/arrow-left.svg"
                alt="arrow"
              ></img>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
