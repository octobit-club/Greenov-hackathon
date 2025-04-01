import React from 'react';

const OctopusIcon = ({ size = 300 }) => {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
      >
        {/* Octopus Body */}
        <ellipse cx="100" cy="100" rx="60" ry="40" fill="#7C3AED" />

        {/* Tentacles with hover animation */}
        <path
          d="M40 120 C 20 140, 20 180, 40 160"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="8"
          className="transition-transform duration-300 group-hover:rotate-6"
        />
        <path
          d="M160 120 C 180 140, 180 180, 160 160"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="8"
          className="transition-transform duration-300 group-hover:-rotate-6"
        />
        <path
          d="M70 140 C 50 160, 50 200, 70 180"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="8"
          className="transition-transform duration-300 group-hover:translate-y-2"
        />
        <path
          d="M130 140 C 150 160, 150 200, 130 180"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="8"
          className="transition-transform duration-300 group-hover:-translate-y-2"
        />

        {/* Eyes */}
        <circle cx="80" cy="90" r="5" fill="white" />
        <circle cx="120" cy="90" r="5" fill="white" />
        <circle cx="80" cy="90" r="2" fill="black" />
        <circle cx="120" cy="90" r="2" fill="black" />

        {/* Mouth */}
        <path d="M90 110 Q100 120, 110 110" fill="none" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default OctopusIcon;
