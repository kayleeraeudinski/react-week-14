import './App.css';
import Playlist from './Playlist';
import { exampleSongs } from './exampleSongs';
import Addmusic from './Addmusic';

function App() {
  return (
    <div id="flex-container">
      <Addmusic /> {/* component */}
      <Playlist songs={exampleSongs} /> {/* component */}
    </div>
  );
}

export default App;
