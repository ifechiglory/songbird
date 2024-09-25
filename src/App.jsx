import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import localforage from 'localforage';
import SongList from './SongList';
import SearchPage from './SearchPage';

const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Load songs from local storage when the component mounts
    localforage.getItem('songs').then(storedSongs => {
      if (storedSongs) {
        setSongs(storedSongs);
      }
    });
  }, []);

  useEffect(() => {
    // Save songs to local storage whenever the songs state changes
    localforage.setItem('songs', songs);
  }, [songs]);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SongList songs={songs} setSongs={setSongs} />} />
        <Route path="/search" element={<SearchPage songs={songs} />} />
      </Routes>
    </Router>
  );
};

export default App;