import './index.css';
import Songs from './Songs';

export default function Playlist({ songs }) {
  return (
    <div className="playlist">
      {songs.map((song) => (
        <Songs key={song.id} song={song} />
      ))}
      <a href="#top">Return to top</a>
    </div>
  );
}
