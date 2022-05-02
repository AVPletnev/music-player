import "./styles/app.scss";
//ADDING COMPONENTS
import Player from "./components/Player";
import Song from "./components/Song";
//IMPORT SONGS
import data from "./songs";
import { useState } from 'react';

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
