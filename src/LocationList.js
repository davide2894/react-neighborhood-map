import React, {Component} from 'react';

export default class LocationList extends Component {
    render(){

        const {locationList, locationInListIsClicked} = this.props;

        return(
            <div>
                <ul className="locationList" tabIndex="-1">
                {locationList.map(location =>
					<li 
                        key={location.id}
                        onClick={ () => locationInListIsClicked(location)}
                        tabIndex="0"
					>
                        {location.title}

					</li>
                    
				)}  
                </ul>
            </div>
        )
    }
}