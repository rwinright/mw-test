import './App.css';
import React from 'react';
import Home from './pages/Home';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      {/* define entry point to app*/}
      <Home />
    </div>
  );
}

export default App;
