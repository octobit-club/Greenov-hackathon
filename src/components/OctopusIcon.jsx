
import React from 'react';

const OctopusIcon = ({ size = 300 }) => {
  
                  return (
    <div 
      className="flex items-center justify-center relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img 
        src="/images/Untitled design(1).svg" 
        alt="Reading Octopus" 
        width="100%" 
        height="100%"
        className="transition-all duration-500 hover:scale-110"
      />
    </div>
  );
};

export default OctopusIcon;