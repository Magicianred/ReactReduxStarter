import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Components {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;
