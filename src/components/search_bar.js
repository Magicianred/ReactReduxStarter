import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return ( 
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputchange(event.target.value)} />
            </div>
        );
    }

    onInputchange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
