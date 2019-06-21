import React from 'react';
import Nav from './Nav';
import Home from './Home';
import History from './History';

// User Components
import UserForm from './User';
import ProtectedRoute from './User/ProtectedRoute'

import {Switch, Route} from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div id='main-container'>
      <Nav />
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute path='/history' component={History} />
        <Route path='/login' component={() => <UserForm type='login' />} />
        <Route path='/signup' component={() => <UserForm type='signup' />} />

      </Switch>
    </div>
  );
};

export default App;