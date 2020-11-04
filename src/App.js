import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes/index'

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
      <Routes></Routes>
      </React.StrictMode>
    );
  }
}

export default App;
