import React from 'react';

import Jobs from '../containers/Jobs';
import SearchBar from '../containers/SearchBar';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return(
            <>
                <SearchBar inputValue={this.state.inputValue} onChange={this.handleChange} />
                <Jobs data={this.props.data} value={this.state.inputValue}/>
            </>
        );
    }
}

export default App;