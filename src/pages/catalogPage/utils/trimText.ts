export const trimText = (text: string): string => {
  const periodIndex = text.search(/[.\n]/);

  return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
};
