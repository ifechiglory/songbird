import React from 'react';
import SongItem from './SongItem';
import AddSongForm from './AddSongForm';

const SongList = ({ songs, setSongs }) => {
  const deleteSong = (title) => {
    if(confirm('This action cannot be undone. Do you wish to proceed?')){
      setSongs(songs.filter(song => song.title !== title));
    }
  };

  const updateSong = (updatedSong) => {
    setSongs(songs.map(song => song.title === updatedSong.title ? updatedSong : song));
  };

  const addSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  return (
    <div className='container p-12 m-auto'>
      <AddSongForm addSong={addSong} />
      
      <h3 className='font-bold text-2xl mb-4 p-6 underline text-green-300'>Song List</h3>
      <ul>
        {songs.map(song => (
          <SongItem
            key={song.title}
            song={song}
            deleteSong={deleteSong}
            updateSong={updateSong}
          />
        ))}
      </ul>
    </div>
  );
};

export default SongList;