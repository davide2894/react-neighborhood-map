import React, { Component } from 'react';

import LocationList from './LocationList';
       
export default class ListView extends Component {

    state = {
        query: ""
    }

    updateQuery = (query) => {
        this.setState({query: query});
        this.props.updateFilteredLocations(query);
    }

    render(){
        const { query } = this.state;
        const { locations } = this.props;
        console.log(this.props.currentMarker)
        return(     
            <div className='listViewContainer'>
                <div className='query'>{query}</div>
                <form 
                    className='locationFilter'
                    onSubmit={(event)=>event.preventDefault()}
                >
					<input
						type="text"
						placeholder="Look for a location"
						value={query}
						onChange={(event) => 
							this.updateQuery(event.target.value)}
					/>
				</form>
                <LocationList
                    locationList={locations}
                    onClick={this.props.onClick}
                    locationInListIsClicked={this.props.locationInListIsClicked}
                />
            </div>
        )   
    }
}
