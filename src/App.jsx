import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInAndRegisterPage from './pages/sign-in-and-register/SignInAndRegisterPage';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
