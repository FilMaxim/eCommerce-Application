import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

export const BurgerBtn: React.FC<{ clickHandler: (open: boolean) => void }> = ({
  clickHandler
}: {
  clickHandler: (open: boolean) => void;
}) => {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={() => {
        clickHandler(true);
      }}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon
        className="h-6 w-6"
        aria-hidden="true"
      />
    </button>
  );
};
