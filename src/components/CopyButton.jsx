import React, { useState } from 'react';

const CopyButton = ({ textToCopy }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy Lyrics');



  const copyToClipboard = () => {
    const formattedLyrics = textToCopy.replace(/\n/g, '\n\n');
    navigator.clipboard.writeText(formattedLyrics);
    setCopyButtonText('Copied');

    setTimeout(() => {
      setCopyButtonText('Copy Lyrics');
    }, 5000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`mt-4 px-4 py-2 w-34 m-auto rounded-lg text-white hover:underline ${
        copyButtonText === 'Copied' ? 'bg-blue-500' : 'bg-blue-900 hover:bg-blue-600'
      }`}
    >
      {copyButtonText}
    </button>
  );
};

export default CopyButton;
