import React from 'react';
import '../styles/searchBar.css'

const SearchBar = (props) => {
    return(
        <div className="SearchContainer">
            <form onSubmit={props.onSubmit}>
                <input type="text" value={props.inputValue} onChange={props.onChange} />
            </form>
            <div className="clear">
                <button onClick={props.clear}>Clear</button>
            </div>
        </div>
    )
}

export default SearchBar;