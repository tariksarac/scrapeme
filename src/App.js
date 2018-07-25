import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className={'title'}>SCRAPE ME!</div>
        <div className={'input-container'}>
            <input placeholder={'Enter url'}/>
            <button>Scrape</button>
        </div>
        <div className={'output-container'}></div>
      </div>
    );
  }
}

export default App;
