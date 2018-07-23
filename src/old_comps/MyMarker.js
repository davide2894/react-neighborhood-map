import React, {Component} from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import { Marker, InfoWindow } from 'react-google-maps';

export default class MyMarker extends Component {

    state = {
        isOpen: false,
        //activeMarker: this.props.activeMarker
    }

    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    // componentWillReceiveProps(propsToReceive){
    //     this.setState({activeMarker: propsToReceive.activeMarker})
    // }

    render(){
        return(
            <div>
                <Marker
                    onClick={this.toggleOpen}
                    position={this.props.location}
                >
                
                { this.state.isOpen && 
                    <InfoWindow 
                        maxWidth={200}
                        defaultPosition={this.props.location}
                        onCloseClick={this.props.onToggleOpen}
                    >
                        <div>Hi</div>
                    </InfoWindow>
                }
                </Marker>
            </div>
        );
    }
}
