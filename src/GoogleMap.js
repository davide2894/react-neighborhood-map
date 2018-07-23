import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class GoogleMap extends Component {

	render() {

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
					//onClick={this.onMarkerClick}
				/>
			)}
	
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyCkRfz-vj3NHf6LsTzvoPj0iLJ1GdED3h4')
})(GoogleMap)