// src/components/URLForm.tsx
import React, { useState } from 'react';
import { logger } from '../middleware/logger';

interface URLFormProps {
  onShorten: (shortUrl: string) => void;
}

const URLForm: React.FC<URLFormProps> = ({ onShorten }) => {
  const [longUrl, setLongUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    logger('Sending URL to mock API: ', longUrl);

    try {
      // Simulate API delay (1.5 sec)
      setTimeout(() => {
        const dummyShortUrl = `https://short.ly/${Math.random().toString(36).substring(7)}`;
        logger('Mock API returned:', dummyShortUrl);
        onShorten(dummyShortUrl);
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError('Unexpected error occurred.');
      logger('Mock error', err);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Shortening...' : 'Shorten'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default URLForm;