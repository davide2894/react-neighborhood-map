import React, { Component } from 'react';

import LocationList from './LocationList';
       
export default class SearchLocation extends Component {
    render(){
        
        const {locations} = this.props;

        return(
            <LocationList
                locationList={locations}
            />
        )   
    }
}
