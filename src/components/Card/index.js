import React, { useState } from 'react';
import styles from './CardStyle.scss';

const Card = ({ id, name, price, imageUrl, onPlus, onFavorite }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ id, name, price, imageUrl });
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    // onFavorite({ id, name, price, imageUrl });
  };

  return (
    <div className="card">
      <img
        onClick={onClickFavorite}
        className="favorite"
        width={32}
        height={32}
        src={isFavorite ? `/img/heart-liked.svg` : `/img/heart-unliked.svg`}
        alt="Favorite"
      />
      <img width={133} height={122} src={imageUrl} alt={name} />
      <p>{name}</p>
      <div className="card-price">
        <div>
          <span>Цена</span>
          <b>{price}лей.</b>
        </div>
        <img
          onClick={onClickPlus}
          src={isAdded ? '/img/button-cheked.svg' : '/img/button-unckeked.svg'}
          alt="Plus"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default Card;
