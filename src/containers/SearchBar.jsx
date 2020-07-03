import React from 'react';
import '../styles/searchBar.css'

const SearchBar = (props) => {
    return(
        <div className="SearchContainer">
            <form onSubmit={props.onSubmit}>
                <input type="text" value={props.inputValue} onChange={props.onChange} />
            </form>
            <button onClick={props.clear}>Clear</button>
        </div>
    )
}

export default SearchBar;