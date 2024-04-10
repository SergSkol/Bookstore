import React, { useEffect } from 'react';
import { mountVercelToolbar } from '@vercel/toolbar';

const VercelToolbar = () => {
  useEffect(() => {
    mountVercelToolbar();
  });

  return (
    <div className="container">
      Provided by Vercel
    </div>
  );
};

export default VercelToolbar;
