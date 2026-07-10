import React from 'react';
import useTilt from '../hooks/useTilt';

const TiltCard = ({ children, className }) => {
  const tiltRef = useTilt();
  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltCard;
