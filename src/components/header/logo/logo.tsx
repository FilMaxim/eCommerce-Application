import logo from '../../../assets/logo.svg';
import React from 'react';

interface ILogoParams {
  className?: string
}

export const Logo = ({ className }: ILogoParams) => {
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
