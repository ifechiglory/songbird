import React, { useState } from "react";

const AddSongForm = ({ addSong }) => {
  const [song, setSong] = useState({ title: "", artist: "", lyrics: "" }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    setSong({ title: "", artist: "", lyrics: "" });
  };
  

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-2 lg:h-max rounded-md shadow-lg mt-4"
    >
      <div className="flex flex-col gap-3">
        <input
          className="p-4 rounded bg-gray-300 w-full text-black outline-0"
          type="text"
          placeholder="Song Title"
          value={song.title}
          onChange={(e) => setSong({ ...song, title: e.target.value })}
          required
        />
        <input
          className="p-4 rounded bg-gray-300 w-full text-black outline-0"
          type="text"
          placeholder="Artist (optional)"
          value={song.artist}
          onChange={(e) => setSong({ ...song, artist: e.target.value })}
        />
        <textarea
          className="p-4 rounded bg-gray-300 w-full text-black outline-0"
          placeholder="Lyrics"
          rows={10}
          required
          value={song.lyrics}
          onChange={(e) => setSong({ ...song, lyrics: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="rounded-full w-40 text-blue-100 border-0 mx-auto my-6 hover:text-white"
      >
        Add Song
      </button>
    </form>
    </>
  );
};

export default AddSongForm;