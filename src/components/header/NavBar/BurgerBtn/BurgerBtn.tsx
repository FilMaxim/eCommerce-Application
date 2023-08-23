import { Bars3Icon } from '@heroicons/react/24/outline';
import type { ClickHandlerInterface } from '../../../../utils/types';

export const BurgerBtn = ({ clickHandler }: ClickHandlerInterface) => {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
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
