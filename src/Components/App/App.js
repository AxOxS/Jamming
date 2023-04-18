import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { Spotify } from '../../util/Spotify';

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
      playlistName: "Example Playlist",
      playlistTracks: [
        {
          name: "Example Playlist Track Name",
          artist: "Example Playlist Track Artist",
          album: "Example Playlist Track Album",
          id: 3,
        },
        {
          name: "Example Playlist Track Name 4",
          artist: "Example Playlist Track Artist 4",
          album: "Example Playlist Track Album 4",
          id: 4,
        }
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find((playlistTrack) => playlistTrack.id === track.id);
    const newTrack = this.state.playlistTracks.concat(track);

    foundTrack ? console.log("Track already exists") : this.setState({ playlistTracks: newTrack });
  }

  removeTrack(track) {
    const isPresent = this.state.playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id);
    this.setState({ playlistTracks: isPresent });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({playlistName: 'New Playlist', playlistTracks: []})
    alert('Playlist Saved')
  }

  search(term) {
    Spotify.search(term).then((result) => {
      this.setState({ searchResults: result })
    })
    //console.log(term);
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">X</span>-List</h1>
        <div className="App">
          {/* Add a SearchBar component*/}
          <SearchBar
          onSearch={this.search}
          onClick={this.search}
          />

          <div className="App-playlist">
            {/* Add a SearchResults component */}
            <SearchResults
            onAdd={this.addTrack}
            searchResults={this.state.searchResults} />

            {/* Add a Playlist component */}
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
