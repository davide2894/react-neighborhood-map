import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class GoogleMap extends Component {

	constructor(props){
		super(props);
		this.state = {
			showInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		}
	}

	onMarkerClick = (props, marker, e) => 
		this.setState({
			selectedPlace: this.props.locations,
			activeMarker: marker,
			showInfoWindow: true
		});
		

	render() {
		console.log(this.state.selectedPlace);
		console.log(this.state.activeMarker);
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
					onClick={this.onMarkerClick}
				/>
			)}
			<InfoWindow 
				 onClose={this.onInfoWindowClose}
				 marker={this.state.activeMarker}
				 visible={this.state.showInfoWindow}>
			>
				<div>
					<h1>{this.state.activeMarker.title}</h1>
				</div>
       		</InfoWindow>	
			</Map>
		);
	}
}

export default GoogleApiWrapper({	
	apiKey: ('AIzaSyCkRfz-vj3NHf6LsTzvoPj0iLJ1GdED3h4')
})(GoogleMap)