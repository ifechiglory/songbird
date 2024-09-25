import React, { useState } from 'react';

const EditSongModal = ({ song, closeModal, updateSong }) => {
  const [updatedSong, setUpdatedSong] = useState({ ...song });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(updatedSong);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Song</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Song Title"
            value={updatedSong.title}
            onChange={(e) => setUpdatedSong({ ...updatedSong, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Artist (optional)"
            value={updatedSong.artist}
            onChange={(e) => setUpdatedSong({ ...updatedSong, artist: e.target.value })}
          />
          <textarea
            placeholder="Lyrics (optional)"
            value={updatedSong.lyrics}
            onChange={(e) => setUpdatedSong({ ...updatedSong, lyrics: e.target.value })}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditSongModal;