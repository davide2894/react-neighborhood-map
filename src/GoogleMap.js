import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class GoogleMap extends Component {

	constructor(props){
		super(props);
		this.state = {
			showInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
			activeMarkerInfo: {}
		}
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: this.props.locations,
			activeMarker: marker,
			showInfoWindow: true
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
			//this.setState({activeMarkerInfo: response.response.venue.description})
		})

	}
		

	render() {
		//console.log(this.state.selectedPlace);
		//console.log(this.state.activeMarker);
		//console.log('this.state.activeMarkerInfo', this.state.activeMarkerInfo);

		const styles = {
			width: '100%',
			height: '100%'
		};

		const {locations} = this.props;	

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
					key={location.id}
					title={location.title}
					position={location.position}
					venueId={location.venueId}
					onClick={this.onMarkerClick}
				/>
			)}
			<InfoWindow 
				 onClose={this.onInfoWindowClose}
				 marker={this.state.activeMarker}
				 visible={this.state.showInfoWindow}>
			>
				{this.state.activeMarkerInfo &&
					<div>
						<h1>{this.state.activeMarker.title}</h1>
						<blockquote>this.state.activeMarkerInfo</blockquote>
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