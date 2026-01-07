import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 90,
  height = 50,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="600" fill="#ffffff20" />

      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bada55" stopOpacity="1" />
          <stop offset="100%" stopColor="#4ca64c" stopOpacity="1" />
        </linearGradient>
      </defs>

      <g
        transform="translate(400, 250) scale(1.2)"
        stroke="url(#logoGradient)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M-60,-34.6 L0,-69.2 L60,-34.6 L60,34.6 L0,69.2 L-60,34.6 Z"
          opacity="0.2"
        />
        <path d="M-10,-5.7 L0,-11.5 L10,-5.7 L10,5.7 L0,11.5 L-10,5.7" />
        <path d="M-20,-11.5 L0,-23 L20,-11.5 L20,11.5 L0,23 L-20,11.5" />
        <path d="M-30,-17.3 L0,-34.6 L30,-17.3 L30,17.3 L0,34.6 L-30,17.3" />
        <path d="M-40,-23 L0,-46 L40,-23 L40,23 L0,46 L-40,23" />
        <path d="M-50,-28.8 L0,-57.7 L50,-28.8 L50,28.8 L0,57.7 L-50,28.8" />
      </g>

      <g transform="translate(180, 450)" fill="#bada55">
        <path d="M0,0 H30 V8 H10 V15 H25 V23 H10 V40 H0 Z" />
        <path d="M40,40 L55,0 L70,40 H60 L55,25 L50,40 Z" />
        <path d="M80,0 H105 C115,0 115,15 105,20 L115,40 H105 L95,20 H90 V40 H80 Z M90,8 V15 H98 V8 Z" />
        <path d="M125,0 V40 H135 V25 H150 V40 H160 V0 H150 V15 H135 V0 Z" />
        <path d="M170,40 L185,0 L200,40 H190 L185,25 L180,40 Z" />
        <path d="M210,0 V40 H220 L235,15 V40 H245 V0 H235 L220,25 V0 Z" />
        <g transform="translate(280, 0)">
          <path d="M0,40 V0 L15,20 L30,0 V40 H20 V15 L15,22 L10,15 V40 Z" />
          <path d="M40,40 L55,0 L70,40 H60 L55,25 L50,40 Z" />
          <path d="M80,0 V40 H90 V25 H105 V40 H115 V0 H105 V15 H90 V0 Z" />
          <path d="M125,0 H135 V40 H125 Z" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
