import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router';
import styles from '../index.scss';

const Profile = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="content-header">
        <h2>Мои заказы</h2>
      </div>

      <div className="sneakers">
        {orders && orders.length > 0 ? (
          orders.map((item) => <Card key={item.id} {...item} />)
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
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
