import React, {Component} from 'react';

export default class LocationList extends Component {
        
    render(){

        const {locationList, locationInListIsClicked} = this.props;

        return(
            <div>
                <ul 
                    className="locationList"
                >
                {locationList.map(location =>
                    <li 
                        tabIndex={0}
                        role="button"
                        key={location.id}
                        onClick={ () => locationInListIsClicked(location)}
					>
                        {location.title}

					</li>
                    
				)}  
                </ul>
            </div>
        )
    }
}