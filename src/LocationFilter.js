import React, {Component} from 'react';

export default class LocationFilter extends Component {
    constructor(){
        super();
        this.state = {
            query: ""
        }

    }

    
    render(){

        updatedQuery = (updatedQuery) => {
            this.setState({query: updatedQuery});
        }

        return(
            <div>
                <form
                    role="searchbox"
				>
					<input
                        aria-labelledby="Look for a location"
                        aria-required="false"
						type="text"
                        autofocus="true"
                        placeholder="Look for a location"
						value={query}
						onChange={(event) => 
							this.sendUpdatedQueryUp(event.target.value)}
					/>
				</form>
            </div>
        )
    }
}