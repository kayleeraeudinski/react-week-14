import './index.css';

export default function Addmusic() {
  return (
    <div id="new-song-form">
      <h2>Enter New Song Data</h2>

      <form>
        <label htmlFor="song-name-input" className="full-line-label">
          Song Name:
        </label>
        <input type="text" id="song-name-input" required />
        

        <label htmlFor="artist-name-input" className="full-line-label">
          Artist Name:
        </label>
        <input type="text" id="artist-name-input" required />

        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}
