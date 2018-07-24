import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap';
import * as locationJSON from './locations.json'
import ListView from './ListView';
import escapeRegExp from 'escape-string-regexp'

// var foursquare = require('react-foursquare')({
//   clientID: 'RJZMA0DVSXNVV1VEXCS2ZO3D2NE0ZLW1HV40AUKF5WKWUX1O',
//   clientSecret: '05HYA2D2PW235BLHEZUSCCTQWI2TCDQWHWHZDLEFIOIKI3P4',
// });

// var params = {
//   VENUE_ID: '4bb10d87f964a52029763ce3'
// };

class App extends Component {

  constructor(){
    super();
    this.state = {
      filteredLocations: locationJSON,
      showInfoWindow: false,
      currentMarker: {},
      response: {}
    }
  }

  componentDidMount(){
  
    const endpoint = 'https://api.foursquare.com/v2/venues/4bb10d87f964a52029763ce3?';

    const params = {
      client_id: 'RJZMA0DVSXNVV1VEXCS2ZO3D2NE0ZLW1HV40AUKF5WKWUX1O',
      client_secret: '05HYA2D2PW235BLHEZUSCCTQWI2TCDQWHWHZDLEFIOIKI3P4',
      v:"20180323"
      //VENUE_ID: '4bb10d87f964a52029763ce3'      
    };

    fetch(`${endpoint}client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}`, {
      method: 'GET'
    })
    .then(res=>res.json())
    .then(response => this.setState({response: response}));

  }

  updateFilteredLocations = (query) => {
    
    if(query){
      console.log(query)

      const match = new RegExp(escapeRegExp(query), 'i');
      
      let locationsToDisplay = locationJSON.filter(location => 
        match.test(location.title)
      );
      
      this.setState({filteredLocations: locationsToDisplay});
    
    } else {
      this.setState({filteredLocations: locationJSON})
    }
    
  }

  getCurrentMarker = (marker) => {
      this.setState({
        currentMarker: marker
      });
  }

  render() {
    const { filteredLocations } = this.state;
    console.log(this.state.response);
    return (
      <div className="App">
        <GoogleMap
          locations={filteredLocations}
          currentMarker={this.state.currentMarker}
          getCurrentMarker={this.getCurrentMarker}
        />

        <ListView
          locations={filteredLocations}
          updateFilteredLocations={this.updateFilteredLocations}
        />
      </div>
    );    
  }
}

export default App;

/*
i think the format of the url when fettching is not valid
Jan Sysala [11:21 PM]
look at the url i did send before
Jan Sysala [11:25 PM]
also with the endpoint + new... you will still have url with venues/VENUE_ID? 
and you need venues/4bb10d87f964a52029763ce3&client_id=...
Jan Sysala [11:25 PM]
idk what URLSearchParams
Jan Sysala [11:25 PM]
does
*/