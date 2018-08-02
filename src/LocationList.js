import React, {Component} from 'react';

export default class LocationList extends Component {
       
    onListItemClick = (props, marker, e) => {
		this.setState({
			selectedPlace: this.props.locations,
			activeMarker: marker,
			showInfoWindow: true,
			isMarkerClicked: true
		});
	}
    
    render(){

        console.log('listItem   ', this.props.currentMarker);

        const {locationList, locationInListIsClicked} = this.props;

        return(
            <div>
                <ul 
                    className="locationList"
                >
                {locationList.map(location =>
                    <li 
                        tabIndex={0}
						key={location.id}
						onClick={ () => locationInListIsClicked(location)}
						//onClick={ () => this.props.updateLocationToFetcVenue(location.venueId)}
					>
                        {location.title}

					</li>
                    
				)}  
                </ul>
            </div>
        )
    }
}