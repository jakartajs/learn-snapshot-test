import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Glyph from './components/Glyph';
import SearchInput from './components/SearchInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: ''
    };
    this.search = this.search.bind(this);
  }

  search(searchResult) {
    this.setState({
      searchResult
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Glyph name={'search'} /> To get started, edit <code>src/App.js</code>{' '}
          and save to reload.
        </p>
        <SearchInput search={this.search} />
        <h3>{this.state.searchResult}</h3>
      </div>
    );
  }
}

export default App;
