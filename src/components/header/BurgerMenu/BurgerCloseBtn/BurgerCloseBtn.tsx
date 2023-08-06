import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const BurgerCloseBtn: React.FC<{ clickHandler: (open: boolean) => void }> = ({
  clickHandler
}) => {
  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={() => {
        clickHandler(false);
      }}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon
        className="h-6 w-6"
        aria-hidden="true"
      />
    </button>
  );
};
