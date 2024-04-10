import React, { useEffect } from 'react';
import { mountVercelToolbar } from '@vercel/toolbar';
import { SpeedInsights } from '@vercel/speed-insights/react';

const VercelToolbar = () => {
  useEffect(() => {
    mountVercelToolbar();
  });

  return (
    <div className="container">
      <SpeedInsights />
      <span className="bookTitle">
        Powered by
        {' '}
        <a href="http://vercel.com">Vercel</a>
      </span>
    </div>
  );
};

export default VercelToolbar;
