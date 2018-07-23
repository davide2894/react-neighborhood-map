import React, {Component} from 'react';
import { SearchBox } from 'react-google-maps';

export default class SearchLocation extends Component {
    render(){
        return(
            <div>
                <SearchBox
                      ref={props.onSearchBoxMounted}
                      bounds={props.bounds}
                      controlPosition={google.maps.ControlPosition.TOP_LEFT}
                      onPlacesChanged={props.onPlacesChanged}                
                >
                <input
                    type="text"
                    placeholder="Customized your placeholder"
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `240px`,
                        height: `32px`,
                        marginTop: `27px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                    }}
                />
                </SearchBox>

            </div>
        )
    }
}