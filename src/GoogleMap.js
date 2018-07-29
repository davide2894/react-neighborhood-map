import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class GoogleMap extends Component {

	constructor(props){
		super(props);
		this.state = {
			showInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
			activeMarkerInfo: "",
			isMarkerClicked: false,
			icon: {},
			clickedLocationInList: this.props.currentMarker
		}
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
		}, (error) => {
			if(error){
			  //handle error 
			  alert(error)
			}
		})
	}
	
	
	render() {
		
		const styles = {
			width: '100%',
			height: '100%',
			clickedMarker: {
				fontSize: '1.4em',
				color: '#333',
				transition: '0.2s ease-in-out',		
			}
		};

		const {locations} = this.props;	

		const clickedIcon = {
            url: "https://loc8tor.co.uk/wp-content/uploads/2015/08/stencil.png",
            scaledSize: new this.props.google.maps.Size(90, 42),
		};

		const defaultIcon = {
			url: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|0091ff|40|_|%E2%80%A2', // url
			scaledSize: new this.props.google.maps.Size(20, 30), // scaled size
		};

		return (

			<Map
				className="googleMap"
				google={this.props.google}
				zoom={13.5}
				style={styles}
				initialCenter={{ lat: 44.498955, lng: 11.327591 }}
			>

			{locations.map(location =>
				<Marker
					style={this.state.isMarkerClicked && styles.clickedMarker}
					key={location.id}
					title={location.title}
					position={location.position}
					venueId={location.venueId}
					onClick={this.onMarkerClick}
					icon={location.title === this.state.activeMarker.title ? clickedIcon : defaultIcon}
				/>
			)}
			
			<InfoWindow 
				key={this.state.activeMarkerInfo.ven}
				onClose={this.onInfoWindowClose}
				marker={this.state.activeMarker}
				visible={this.state.showInfoWindow}
			>
				{this.state.activeMarkerInfo &&
					<div>
						<h1 className="locationTitle">{this.state.activeMarker.title}</h1>
						<blockquote className="locationInfo"><i>Rating provided by <a href="https://foursquare.com/">Foursquare</a></i>: {this.state.activeMarkerInfo}</blockquote>
					</div>
				}
       		</InfoWindow>	
			</Map>
		);
	}
}

export default GoogleApiWrapper({	
	apiKey: ('AIzaSyCkRfz-vj3NHf6LsTzvoPj0iLJ1GdED3h4')
})(GoogleMap)