import './index.css';
import Songs from './Songs';

export default function Playlist({ songs, deleteSong, toggleFavorite }) {
  return (
    <div className="playlist">
      {songs.map((song) => (
        <Songs 
          key={song.id} 
          song={song} 
          deleteSong={deleteSong} 
          toggleFavorite={toggleFavorite} 
        />
      ))}
      <a href="#top">Return to top</a>
    </div>
  );
}
