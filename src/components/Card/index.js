import React, { useState, useEffect } from 'react';
import styles from './style.scss';

const Card = ({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  isFavorite = false,
  added = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);

  useEffect(() => {
    setIsAdded(added);
  }, [added]);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ id, name, price, imageUrl });
  };

  const onClickFavorite = () => {
    setIsFavoriteState(!isFavoriteState);
    onFavorite({ id, name, price, imageUrl });
  };

  return (
    <div className="card">
      {onFavorite && (
        <div className="favorite-wrapper">
          <img
            onClick={onClickFavorite}
            className="favorite"
            width={32}
            height={32}
            src={
              isFavoriteState
                ? `/img/heart-liked.svg`
                : `/img/heart-unliked.svg`
            }
            alt="Favorite"
          />
        </div>
      )}
      <div className="card-img">
        <img width={133} height={122} src={imageUrl} alt={name} />
      </div>

      <p>{name}</p>
      <div className="card-price">
        <div>
          <span>Цена</span>
          <b>{price} лей.</b>
        </div>
        {onPlus && (
          <img
            onClick={onClickPlus}
            src={
              isAdded ? '/img/button-cheked.svg' : '/img/button-unckeked.svg'
            }
            alt="Plus"
            width={32}
            height={32}
            className="add"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
