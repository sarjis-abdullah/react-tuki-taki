import React from 'react';
import Navbar from './components/landingPage/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import dashboard from './views/dashboard'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
