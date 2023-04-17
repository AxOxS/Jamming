import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Example Track Name",
          artist: "Example Track Artist",
          album: "Example Track Album",
          id: 1,
        },
        {
          name: "Example Track Name 2",
          artist: "Example Track Artist 2",
          album: "Example Track Album 2",
          id: 2,
        }
      ],
    };
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">X</span>-List</h1>
        <div className="App">
          {/* Add a SearchBar component*/}
          <SearchBar />

          <div className="App-playlist">
            {/* Add a SearchResults component */}
            <SearchResults searchResults={this.state.searchResults} />

            {/* Add a Playlist component */}
            <Playlist />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
