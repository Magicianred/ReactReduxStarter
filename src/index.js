import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAnn1i8IEIEh-PI7cbL3h-OlMjTHoM_Z0M';

const App = () => {
    return (  
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));

