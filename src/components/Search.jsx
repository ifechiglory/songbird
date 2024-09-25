import React, { useState } from 'react';

const SearchPage = ({ songs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSong, setExpandedSong] = useState(null); // Track which song's lyrics are expanded

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.lyrics?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (title) => {
    setExpandedSong(expandedSong === title ? null : title); // Toggle expand/collapse
  };

  const copyToClipboard = (lyrics) => {
    const formattedLyrics = lyrics.replace(/\n/g, '\n\n');
    navigator.clipboard.writeText(formattedLyrics);
    alert('Lyrics copied to clipboard!');
  };

  return (
    <div className="p-6 fixed overflow-hidden w-full">
      <h2 className="font-bold text-2xl mb-4 text-gray-300">Search Songs</h2>
      <input
        type="text"
        placeholder="Search by title or lyrics"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 rounded bg-green-600 my-4 text-white"
      />

      <div className='h-96 overflow-y-scroll'>
        
      {searchTerm ? (
        <ul>
          {filteredSongs.length > 0 ? (
            filteredSongs.map(song => (
              <li key={song.title} className="mb-4 shadow-md p-4 mt-4">
                <div className="grid grid-cols-2 gap-4 items-start">
                  {/* Left Column: Song Title and Artist */}
                  <div className="text-green-500 font-semibold">
                    {song.title}
                    {song.artist && <span className="text-green-300 ml-2">| {song.artist}</span>}
                  </div>

                  {/* Right Column: Lyrics Snippet */}
                  <div className="relative border-l-2 px-6">
                    {expandedSong === song.title ? (
                      <pre className="whitespace-pre-wrap leading-loose text-green-300">
                        {song.lyrics}
                      </pre>
                    ) : (
                      <pre className="whitespace-pre-wrap leading-loose truncate max-h-16 overflow-hidden text-green-300">
                        {song.lyrics}
                      </pre>
                    )}

                    <button
                      className="mt-2 text-blue-500 hover:underline focus:outline-none"
                      onClick={() => toggleExpand(song.title)}
                    >
                      {expandedSong === song.title ? 'Show Less' : 'Show More'}
                    </button>

                    {/* Copy to Clipboard Button */}
                    <button
                      className="ml-4 mt-2 text-green-500 hover:underline focus:outline-none"
                      onClick={() => copyToClipboard(song.lyrics)}
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>No songs found</li>
          )}
        </ul>
      ) : (
        <p className="text-green-500">Enter a search term to see results.</p>
      )}

      </div>
    </div>
  );
};

export default SearchPage;
