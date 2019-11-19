import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';
import Splash from '../Splash/Splash';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';
import AddData from '../AddData/AddData';
import ViewData from '../ViewData/ViewData';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="App main">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add-data" component={AddData} />
          <Route exact path="/view-data" component={ViewData} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
