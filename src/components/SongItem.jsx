import React, { useState } from 'react';
import EditSongModal from './EditSongModal';
import LyricsModal from './LyricsModal';

const SongItem = ({ song, deleteSong, updateSong }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isViewingLyrics, setIsViewingLyrics] = useState(false);

  return (
    <div className='flex flex-col p-6 shadow-lg rounded-lg mt-6 border-b'>
      <li>
      <p className='font-bold py-4 text-green-200'>{song.title} {song.artist && `| ${song.artist}`}</p>
      <div className="flex gap-4">
        <button onClick={() => setIsEditing(true)} className='bg-green-500'>Edit</button>
        <button onClick={() => deleteSong(song.title)} className='bg-red-600'>Delete</button>
        <button onClick={() => setIsViewingLyrics(true)}>View Lyrics</button>
      </div>

      {isEditing && (
        <EditSongModal
          song={song}
          closeModal={() => setIsEditing(false)}
          updateSong={updateSong}
        />
      )}

      {isViewingLyrics && (
        <LyricsModal
          song={song}
          closeModal={() => setIsViewingLyrics(false)}
        />
      )}
    </li>
    </div>
  );
};

export default SongItem;