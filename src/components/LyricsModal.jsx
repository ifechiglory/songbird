import React from 'react';
import CopyButton from './CopyButton';
import '../index.css';

const LyricsModal = ({ song, closeModal }) => {
  
  const formattedLyrics = song.lyrics.replace(/\n/g, '\n\n');

  return (
    <div className="modal">
      <div className="modal-content">
        <h3 className='font-bold mb-4 text-sm'>Lyrics for {song.title}</h3>
        <pre style={{ whiteSpace: 'pre-wrap', lineHeight: '2' }}>
          {song.lyrics || "No lyrics available"}
        </pre>
        <CopyButton textToCopy={formattedLyrics} />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default LyricsModal;