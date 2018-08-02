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

    componentDidMount(){
        this.nameInput.focus(); 
    }

    render(){
        const { query } = this.state;
        const { locations } = this.props;
              
        return(     
            <div className='listViewContainer'>
                <div className='query'>{query}</div>
                <form
                    role="searchbox"
                    className='locationFilter'
                    onSubmit={(event)=>event.preventDefault()}
                    >
					<input
                        tabIndex={-1}
                        ref={(input) => { this.nameInput = input; }} 
						type="text"
						placeholder="Look for a location"
						value={query}
						onChange={(event) => 
							this.updateQuery(event.target.value)}
					/>
				</form>
                <LocationList
                    role="List"
                    locationList={locations}
                    onClick={this.props.onClick}
                    locationInListIsClicked={this.props.locationInListIsClicked}
                    updateLocationToFetcVenue={this.props.updateLocationToFetcVenue}
                />
            </div>
        )   
    }
}
