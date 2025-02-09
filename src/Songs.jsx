import './index.css';

export default function Songs({ song, deleteSong, toggleFavorite, startEditing }) {
  return (
    <div className="playlist-entry">
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
      <section className="song-data">
        <h4>Song Data:</h4>
        <div className="data-container">
          <div className="button-div">
            <button type="button" onClick={() => toggleFavorite(song.id)}>
              {song.favorite ? "Unfavorite" : "Favorite"}
            </button>
            <button type="button" onClick={() => deleteSong(song.id)}>
              Delete
            </button>
            <button type="button" onClick={() => startEditing(song)}>  
              Edit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}