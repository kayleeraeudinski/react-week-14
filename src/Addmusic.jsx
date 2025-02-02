import { useState } from 'react';
import './index.css';

export default function Addmusic({ addSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && artist) {
      addSong(title, artist);
      setTitle('');
      setArtist('');
    }
  };

  return (
    <div id="new-song-form">
      <h2>Enter New Song Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="song-name-input" className="full-line-label">
          Song Name:
        </label>
        <input
          type="text"
          id="song-name-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <label htmlFor="artist-name-input" className="full-line-label">
          Artist Name:
        </label>
        <input
          type="text"
          id="artist-name-input"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />

        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}
