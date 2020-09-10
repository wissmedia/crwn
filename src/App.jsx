import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss';

import { HomePage } from './pages/homepage/HomePage.jsx'

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
