const getLongStringDateAndTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return `${date.toLocaleDateString('pt-br', options)} às ${date
    .toLocaleTimeString('pt-br')
    .slice(0, 5)}`;
};

export { getLongStringDateAndTime };
