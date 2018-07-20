import React, { Component } from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';

const API_KEY = 'AIzaSyCzE5nhb6F0Tcr_BALpCtN5h_G3onbDdJE';

export class Container extends Component {
   
    
    render() {

      const style = {
        width: '200px',
        height: '200px'
      }

      if (!this.props.loaded) {
        return <div>Loading props...</div>
      }
  
      return (
        <div style={style}>
            <Map 
                google={window.google} 

                initialCenter={{
                    lat: 44.498955,
                    lng: 11.327591
                }}
                style={{
                    width: '100px',
                    height: '100px'
                }}
            />
        </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: (API_KEY)
  })(Container)