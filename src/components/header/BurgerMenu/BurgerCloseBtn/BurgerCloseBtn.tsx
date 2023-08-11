import { XMarkIcon } from '@heroicons/react/24/outline';
import type { ClickHandlerInterface } from '../../../../utils/types';

export const BurgerCloseBtn = ({ clickHandler }: ClickHandlerInterface) => {
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
