'use client';

import Spline from '@splinetool/react-spline';
import { memo } from 'react';

const Design3D = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Spline scene="https://prod.spline.design/iVeqrcLm6IxMhWvr/scene.splinecode" />
      <button
        onClick={() => window.open('https://calendly.com/huzziidev', '_blank')}
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '-4px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0077b5',
          color: 'white',
          padding: '9px 20px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: '600',
          border: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 119, 181, 0.4)',
          fontFamily: 'inherit'
        }}
        onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLButtonElement;
          target.style.background = '#005885';
          target.style.transform = 'translateX(-50%) translateY(-1px)';
          target.style.boxShadow = '0 6px 25px rgba(0, 119, 181, 0.5)';
        }}
        onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLButtonElement;
          target.style.background = '#0077b5';
          target.style.transform = 'translateX(-50%) translateY(0)';
          target.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.4)';
        }}
      >
        Get in Touch
      </button>
    </div>
  );
};

export default memo(Design3D);
