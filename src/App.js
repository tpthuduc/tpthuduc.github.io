import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
      <div className="App">
        <Home/>
      </div>
      </React.StrictMode>
    );
  }
}

export default App;
