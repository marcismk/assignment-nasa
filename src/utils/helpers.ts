/**
 * Formats date to local date string
 * @param value date string
 * @returns formated date
 */
export const formatDate = (value: string): string => {
  const date = new Date(value);

  return date.toDateString();
};
