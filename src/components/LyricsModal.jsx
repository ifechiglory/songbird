import React from 'react';
import '../index.css';

const LyricsModal = ({ song, closeModal }) => {
  const copyToClipboard = () => {
    const formattedLyrics = song.lyrics.replace(/\n/g, '\n\n');
    navigator.clipboard.writeText(formattedLyrics || "No lyrics available");
    alert("Lyrics copied to clipboard!");
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3 className='font-bold mb-4'>Lyrics for {song.title}</h3>
        <pre style={{ whiteSpace: 'pre-wrap', lineHeight: '2' }}>
          {song.lyrics || "No lyrics available"}
        </pre>
        <button onClick={copyToClipboard}>Copy Lyrics</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default LyricsModal;
