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
      className="flex flex-col p-6 rounded-md shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <input
          className="p-4 rounded bg-blue-800 w-full lg:w-1/2 lg:m-auto text-gray-50 outline-0"
          type="text"
          placeholder="Song Title"
          value={song.title}
          onChange={(e) => setSong({ ...song, title: e.target.value })}
          required
        />
        <input
          className="p-4 rounded bg-blue-800 w-full lg:w-1/2 lg:m-auto text-gray-50 outline-0"
          type="text"
          placeholder="Artist (optional)"
          value={song.artist}
          onChange={(e) => setSong({ ...song, artist: e.target.value })}
        />
        <textarea
          className="p-4 rounded bg-blue-800 w-full lg:w-1/2 lg:m-auto text-gray-50 outline-0"
          placeholder="Lyrics"
          rows={5}
          required
          value={song.lyrics}
          onChange={(e) => setSong({ ...song, lyrics: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="rounded-full w-36 text-blue-900 border-0 mx-auto my-4 hover:text-white"
      >
        Add Song
      </button>
    </form>
    </>
  );
};

export default AddSongForm;