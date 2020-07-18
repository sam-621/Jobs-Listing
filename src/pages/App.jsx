import React, {useState} from 'react';
import '../styles/app.css'

import Header from '../images/bg-header-desktop.svg'
import Jobs from '../containers/Jobs';
import SearchBar from '../containers/SearchBar';

function App({ data }) {
    
    const [inputValue, setInputValue] = useState('');
    
    function handleChange(e) {
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function clear(e) {
        setInputValue('');
        e.preventDefault();
    }


    return(
        <>
            <header>
                <div className="Hero">
                    <img src={Header} alt=""/>
                </div>
                <div className="SearchBar">
                    <SearchBar 
                        inputValue={inputValue} 
                        onChange={handleChange} 
                        clear={clear} 
                        onSubmit={handleSubmit} 
                    />
                </div>
            </header>
            <Jobs 
                data={data} 
                value={inputValue}
            />
        </>
    );
}

export default App;