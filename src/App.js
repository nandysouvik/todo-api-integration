import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './components/UserDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user_details">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
