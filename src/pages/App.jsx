import React from 'react';
import '../styles/app.css'

import Header from '../images/bg-header-desktop.svg'
import Jobs from '../containers/Jobs';
import SearchBar from '../containers/SearchBar';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    clear(e) {
        this.setState({
            inputValue: ''
        });
        e.preventDefault();
    }

    render() {
        return(
            <>
                <header>
                    <div className="Hero">
                        <img src={Header} alt=""/>
                    </div>
                    <div className="SearchBar">
                        <SearchBar 
                            inputValue={this.state.inputValue} 
                            onChange={this.handleChange} 
                            clear={this.clear} 
                            onSubmit={this.handleSubmit} 
                        />
                    </div>
                </header>
                <Jobs 
                    data={this.props.data} 
                    value={this.state.inputValue}
                />
            </>
        );
    }
}

export default App;