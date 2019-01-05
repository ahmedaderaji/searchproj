import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = (event) => { 
        console.log(`OnInputChange fired`);
        console.log(`setState: {term : ${event.target.value}}`);
        this.setState({term: event.target.value})
    };

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className=" ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}  /*   onChange={event => this.setState({term: event.target.value})}*/
                         />
                    </div>
                </form>
            </div>
        );
    };

  /*  
	
	componentDidMount(){
        console.log("SearchBar : componentDidMount()");	
        console.log("-----------------------------------\n");	
	}
	
	componentDidUpdate(){
		console.log("SearchBar : componentDidUpdate()");	
    }
    componentWillUnmount(){
		console.log("SearchBar : componentWillUnmount()");	
	} */
}
export  default SearchBar;