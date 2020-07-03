import React from 'react';

const Tag = (props) => {
    const { technology} = props;

    return(
        <div style={{marginLeft: 10 + 'px'}}>
            <button>{technology}</button>
        </div>  
    );
}

export default Tag;