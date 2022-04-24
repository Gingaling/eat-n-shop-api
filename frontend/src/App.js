import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AllGroceryList from './components/AllGroceryList/AllGroceryList';
import EatenList from './components/EatenList/EatenList';
import UpdateGroceryList from './components/UpdateGroceryList/UpdateGroceryList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import UpdateForm from './components/UpdateForm/UpdateForm';
import Home from './components/Home/Home';

function App() {
	return (
  <>
    <header id="main-page">
      <img
        src="https://i.imgur.com/gVDUxF1.png" className="App-logo" alt="logo"
      />
      <div id="main-page-api-title">
        <Link to="/">
            Kitchen Counter
        </Link>
      </div>
    </header>
    <div>
      <Routes>
        <Route
          path='/list' element={<AllGroceryList />}
        />
        <Route
          path='/eaten' element={<EatenList />}
        />
        <Route
          path='/update' element={<UpdateGroceryList />}
        />
        <Route
          path='/shop' element={<ShoppingList />}
        />
        <Route
          path='/update-grocery' element={<UpdateForm />}
        />
        <Route
          path='/' element={<Home />}
        />
      </Routes>
    </div>
  </>
	);
}

export default App;
