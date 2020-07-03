import React from 'react';

const SearchBar = (props) => {
    return(
        <form onSubmit={props.onSubmit}>
            <input type="text" value={props.inputValue} onChange={props.onChange} />
        </form>
    )
}

export default SearchBar;