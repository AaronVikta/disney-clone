import React from 'react';
import Home from './components/Home'
import './App.css';
import Header from './components/Header'
import Detail from './components/Detail';
import Login from './components/Login';
import MovieListing from './components/MovieListing'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/movies">
            <MovieListing/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
