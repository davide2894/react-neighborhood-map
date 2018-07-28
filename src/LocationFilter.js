import React, {Component} from 'react';

export default class LocationFilter extends Component {
    constructor(){
        super();
        this.state = {
            query: ""
        }
        this.filter=React.createRef();

    }

    
    render(){
        this.filter.focus();

        updatedQuery = (updatedQuery) => {
            this.setState({query: updatedQuery});
        }

        return(
            <div>
                <form
				>
					<input
                        ref={this.filter}
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