import React from 'react';

const SongModal = ({ song, onClose, isEdit, onSave }) => {
  return (
    <div className="fixed inset-0 bg-blue-50 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          {isEdit ? 'Edit Song' : 'View Song'}
        </h2>

        <div className="mb-4">
          <p className='text-blue-600'>{song.title} {song.artist && `| ${song.artist}`}</p>
        </div>


        <div className="mb-4">
          <p className="font-semibold text-blue-800">Lyrics:</p>
          <pre className="whitespace-pre-wrap leading-loose">{song.lyrics}</pre>
        </div>

        {isEdit && (
          <textarea
            className="w-full p-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            defaultValue={song.lyrics}
          />
        )}

        <div className="mt-4 flex justify-end">
          {isEdit ? (
            <button
              onClick={onSave}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600 mr-2"
            >
              Save
            </button>
          ) : null}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongModal;
