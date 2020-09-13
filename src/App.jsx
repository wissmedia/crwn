import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInAndRegisterPage from './pages/sign-in-and-register/SignInAndRegisterPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
