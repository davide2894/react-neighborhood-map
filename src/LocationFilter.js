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
				>
					<input
						type="text"
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