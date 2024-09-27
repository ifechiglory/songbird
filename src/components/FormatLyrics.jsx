import React, { useState } from 'react';
import Header from './Header'; 
import CopyButton from './CopyButton';

const LyricsFormatter = () => {
  const [lyrics, setLyrics] = useState('');
  const [formattedLyrics, setFormattedLyrics] = useState('');

  const formatLyrics = () => {
    const doubleSpacedLyrics = lyrics.replace(/\n/g, '\n\n');
    setFormattedLyrics(doubleSpacedLyrics);
  };


  const clearLyrics = () => {
    setLyrics('');
    setFormattedLyrics('');
  };

  return (
    <div>
      <Header /> {/* Add the header at the top */}

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Lyrics Formatter</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     
          <div>
            <textarea
              className="w-full p-4 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 bg-white text-blue-900 format_text"
              rows="10"
              placeholder="Paste your lyrics here..."
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
            ></textarea>

            <div className="mt-4 flex space-x-4">
              <button
                onClick={formatLyrics}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Format
              </button>

              <button
                onClick={clearLyrics}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Clear Input
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            {formattedLyrics ? (
              <div className="bg-white p-4 border border-blue-400 rounded-lg overflow-y-auto h-full">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Formatted Lyrics:</h3>
                <pre className="whitespace-pre-wrap leading-loose">{formattedLyrics}</pre>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-white p-4 border border-blue-400 rounded-lg">
                <p className="text-gray-500">Formatted lyrics will appear here...</p>
              </div>
            )}

            {formattedLyrics && (
                <CopyButton textToCopy={formattedLyrics} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LyricsFormatter;
