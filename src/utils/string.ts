export const getLabelFromName = (str: string) =>
  str
    .split(/[\s-]+/)
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .trim();
