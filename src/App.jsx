import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import './index.scss';
import React, { useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const onFavorite = (product) => {
    setFavorites((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };
  const onAddToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
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
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickCloseCart={() => setCartOpened(false)}
          onClickRemoveItem={onClickRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              searchValue={searchValue}
              clearInput={clearInput}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onFavorite={onFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onFavorite={onFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
