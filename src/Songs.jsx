import './index.css';

export default function Songs({ song }) {
  return (
    <div className="playlist-entry">
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3> {/*entry for songs*/}
      <section className="song-data">
        <h4>Song Data:</h4>
        <div className="data-container">
          <div className="button-div">
            <button
              type="button"
              className="edit-button"
              data-index={song.title}
            >
              Edit
            </button>
            <button
              type="button"
              className="delete-button"
              data-index={song.artist}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
