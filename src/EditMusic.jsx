import { useState } from 'react';
import './index.css';

export default function EditMusic({ song, updateSong, close }) {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song.id, title, artist); // Update the song
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Song</h2>
        <form onSubmit={handleSubmit}>
          <label>Song Name:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label>Artist Name:</label>
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />

          <button type="submit">Save</button>
          <button type="button" onClick={close}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
