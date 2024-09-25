import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import localforage from 'localforage';
import SongList from './components/SongList';
import Search from './components/Search';

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
      <div className='flex w-full px-10 py-6 bg-green-300 justify-between items-center'>
        <h1>Song Manager</h1>

        <nav className='flex justify-between'>
        <Link to="/">Add Song</Link>
        <Link to="/search">Search</Link>
      </nav>
      </div>
     

      <Routes>
        <Route path="/" element={<SongList songs={songs} setSongs={setSongs} />} />
        <Route path="/search" element={<Search songs={songs} />} />
      </Routes>
    </Router>
  );
};

export default App;