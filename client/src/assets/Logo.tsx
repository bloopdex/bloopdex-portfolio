import React from "react";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 272 297"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 14H258" />
      <path d="M14 282.761H258" />
      <path d="M163.45 14L63.7017 144.079C63.1661 144.778 63.1501 145.744 63.6625 146.46L163.45 285.886" />
    </svg>
  );
}
export default Logo;
