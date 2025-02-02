import { useState } from 'react';
import './App.css';
import Playlist from './Playlist';
import { exampleSongs } from './exampleSongs';
import Addmusic from './Addmusic';

function App() {
  const [songs, setSongs] = useState(exampleSongs);

  const addSong = (title, artist) => {
    if (!title || !artist) return;
    const newSong = {
      title: title,
      artist: artist,
      id: Date.now().toString()
    };
    setSongs([...songs, newSong]);
  };

  const deleteSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  const toggleFavorite = (id) => {
    setSongs(songs.map(song => 
      song.id === id ? { ...song, favorite: !song.favorite } : song
    ));
  };

  return (
    <div id="flex-container">
      <Addmusic addSong={addSong} />
      <Playlist songs={songs} deleteSong={deleteSong} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
