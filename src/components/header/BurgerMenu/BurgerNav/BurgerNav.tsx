import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames, products, callsToAction } from '../../menuData';

const BurgerNav = () => {
  return (
    <div className="space-y-2 py-6">
      <Disclosure
        as="div"
        className="-mx-3"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Product
              <ChevronDownIcon
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {[...products, ...callsToAction].map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Features
      </a>
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Marketplace
      </a>
      <a
        href="#"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Company
      </a>
    </div>
  );
};

export default BurgerNav;
