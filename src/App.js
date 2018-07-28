import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap';
import * as locationJSON from './locations.json'
import ListView from './ListView';
import escapeRegExp from 'escape-string-regexp'
import { slide as Menu } from 'react-burger-menu'

class App extends Component {

  constructor(){
    super();
    this.state = {
      filteredLocations: locationJSON,
      showInfoWindow: false,
      currentMarker: {},
      response: {},
      clickedMarker: {}
    }
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


  getClickedMarker = (marker) => {
    this.setState({
      clickedMarker: marker
    });
  }

  toggleInfoBox = (marker) => {
    this.setState((prevState) => ({
      infoBoxIsOpen: !(prevState.infoBoxIsOpen)
    }));
    this.getClickedMarker(marker);
  }

  locationInListIsClicked = (marker) => {
    //this.toggleInfoBox(marker);
    this.setState({
      currentMarker: marker
    });
  }


  onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: this.props.locations,
			activeMarker: marker,
			showInfoWindow: true,
			isMarkerClicked: true
		});

		const endpoint = 'https://api.foursquare.com/v2/venues/';

		const params = {
		  client_id: 'RJZMA0DVSXNVV1VEXCS2ZO3D2NE0ZLW1HV40AUKF5WKWUX1O',
		  client_secret: 'JPMG5BHSRIECSFICJ3B1INNWNZIVU4JG3OVRFFC1WU0JT3FF',
		  v:"20180323"
		};
	
		fetch(`${endpoint}${marker.venueId}?client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(resp => {
			console.log(resp);
			this.setState({activeMarkerInfo: resp.response.venue.rating})
		})

	}



  render() {
    const { filteredLocations } = this.state;
    
    console.log(this.state.currentMarker);

    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '50px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#333',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    // menuIsClicked = (event) => {
    //     event.preventDefault();
    // }

    return (
      <div className="App">
        <GoogleMap
          role="main"
          locations={filteredLocations}
          currentMarker={this.state.currentMarker}
          getCurrentMarker={this.getCurrentMarker}
        />

        <Menu 
          className="hamburgerMenu"
          width={280}
          isOpen={false}
          noOverlay
          disableOverlayClick
          styles={styles}
          onClick={this.menuIsClicked}
        >
          <ListView
            role="list"
            locations={filteredLocations}
            updateFilteredLocations={this.updateFilteredLocations}
            locationInListIsClicked={this.locationInListIsClicked}
            currentMarker={this.state.currentMarker}
          />
        </Menu>
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
idk -,what URLSearchParams
Jan Sysala [11:25 PM]
does
*/