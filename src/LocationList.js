import React, {Component} from 'react';

export default class LocationList extends Component {
    render(){

        const {locationList} = this.props;

        return(
            <div>
                <ul className="locationList">
                {locationList.map(location =>
					<li 
						key={location.key}
					>
						{location.title}
					</li>
				)}  
                </ul>
            </div>
        )
    }
}