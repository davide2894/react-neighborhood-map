import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap';
import SearchLocation from './SearchLocation'
import * as locationJSON from './locations.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap
          locations={locationJSON}
        />

        <SearchLocation
          locations={locationJSON}
        />
      </div>
    );    
  }
}

export default App;
