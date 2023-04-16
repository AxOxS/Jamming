import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="highlight">X</span>List</h1>
        <div className="App">
          {/* Add a SearchBar component*/}
          <SearchBar />
          <div className="App-playlist">
            {/* Add a SearchResults component */}
            <SearchResults />
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
