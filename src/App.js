import React from 'react';
import Navbar from './components/landingPage/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './views/dashboard'
import Project from './views/project'
import SignIn from './views/signin'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={Project}></Route>
          <Route path="/signin" component={SignIn}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
