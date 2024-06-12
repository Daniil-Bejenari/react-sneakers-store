import styles from './CardStyle.scss';
import React from 'react';

const Card = ({ id, name, price, imageUrl, onPlus, onClickFavorite }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ id, name, price, imageUrl });
  };

  return (
    <div className="card">
      <img
        key={id}
        onClick={onClickFavorite}
        className="unliked"
        width={32}
        height={32}
        src="img/heart-unliked.svg"
        alt="unliked"
      ></img>
      <img width={133} height={122} src={imageUrl} alt="img"></img>
      <p>{name}</p>
      <div className="card-price">
        <div>
          <span>Цена</span>
          <b>{price}</b>
        </div>

        <img
          onClick={onClickPlus}
          src={isAdded ? '/img/button-cheked.svg' : '/img/button-unckeked.svg'}
          alt="Plus"
          width={32}
          height={32}
        ></img>
      </div>
    </div>
  );
};

export default Card;
