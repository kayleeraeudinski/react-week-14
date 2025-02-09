import { useState } from 'react';
import './App.css';
import Playlist from './Playlist';
import { exampleSongs } from './exampleSongs';
import AddMusic from './Addmusic';
import EditMusic from './EditMusic';

function App() {
  const [songs, setSongs] = useState(exampleSongs);
  const [editingSong, setEditingSong] = useState(null); // State for editing

  // Function to add a new song
  const addSong = (title, artist) => {
    if (!title || !artist) return;
    const newSong = {
      title: title,
      artist: artist,
      id: Date.now().toString(),
      favorite: false, // Add default favorite property
    };
    setSongs([...songs, newSong]);
  };

  // Function to delete a song
  const deleteSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    setSongs(songs.map(song => 
      song.id === id ? { ...song, favorite: !song.favorite } : song
    ));
  };

  // Function to start editing a song
  const startEditing = (song) => {
    setEditingSong(song);
  };

  // Function to update a song
  const updateSong = (id, updatedTitle, updatedArtist) => {
    setSongs(songs.map(song => 
      song.id === id ? { ...song, title: updatedTitle, artist: updatedArtist } : song
    ));
    setEditingSong(null); // Close the edit modal
  };

  return (
    <div id="flex-container">
      <AddMusic addSong={addSong} />
      <Playlist songs={songs} deleteSong={deleteSong} toggleFavorite={toggleFavorite} startEditing={startEditing} />
      
      {editingSong && (
        <EditMusic 
          song={editingSong} 
          updateSong={updateSong} 
          close={() => setEditingSong(null)} // Close the modal on cancel or save
        />
      )}
    </div>
  );
}

export default App;
