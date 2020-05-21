import React from 'react';
import Navbar from './components/landingPage/Navbar'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
