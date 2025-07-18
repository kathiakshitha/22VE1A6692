import React from 'react';

interface Props {
  shortUrl: string;
}

const ShortenedResult: React.FC<Props> = ({ shortUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Shortened URL copied!');
  };

  return (
    <div className="result">
      <p>
        Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
      </p>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default ShortenedResult;