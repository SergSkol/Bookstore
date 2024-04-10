import React, { useEffect } from 'react';
import { mountVercelToolbar } from '@vercel/toolbar';

const VercelToolbar = () => {
  useEffect(() => {
    mountVercelToolbar();
  });

  return (
    <div className="container">
      <span className="bookTitle">
        Powered by
        {' '}
        <a href="http://vercel.com">Vercel</a>
      </span>
    </div>
  );
};

export default VercelToolbar;
