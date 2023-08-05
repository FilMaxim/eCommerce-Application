import logo from '../../../assets/logo.svg';
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a
      href="#"
      className={`${className ?? ''} -m-1.5 p-1.5`}
    >
      <span className="sr-only">Our shop name should be there</span>
      <img
        className="h-8 w-auto"
        src={logo}
        alt="logo"
      />
    </a>
  );
};
