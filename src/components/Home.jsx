import React from "react";
import SongItem from "./SongItem";
import AddSongForm from "./AddSongForm";
import Header from "./Header";

const SongList = ({ songs, setSongs }) => {
  const deleteSong = (title) => {
    if (confirm("This action cannot be undone. Do you wish to proceed?")) {
      setSongs(songs.filter((song) => song.title !== title));
    }
  };

  const updateSong = (updatedSong) => {
    setSongs(
      songs.map((song) =>
        song.title === updatedSong.title ? updatedSong : song
      )
    );
  };

  const addSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  return (
    <>
      <Header />
      <div className="py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full">
            <AddSongForm addSong={addSong} />
          </div>

          <div className="w-full h-3/4 overflow-y-scroll">
            <h3 className="font-bold text-2xl mb-4 p-6 underline">Song List</h3>
            <ul>
              {songs.map((song) => (
                <SongItem
                  key={song.title}
                  song={song}
                  deleteSong={deleteSong}
                  updateSong={updateSong}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongList;
