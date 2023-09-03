import type { KeyboardEvent } from 'react';

export const handleKeyDawn = (event: KeyboardEvent): void => {
  const exceptions = ['e', 'E', '+', '-'];
  exceptions.includes(event.key) && event.preventDefault();
};
