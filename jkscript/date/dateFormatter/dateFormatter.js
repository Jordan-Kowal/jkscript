const dateFormatter = {
  toIsoDate: (dayjsObj) =>
    (dayjsObj && dayjsObj.isValid() && dayjsObj.format('YYYY-MM-DD')) || '',
  toTimeString: (dayjsObj) => (dayjsObj && dayjsObj.format('HH:mm')) || '',
  toHybridDateString: (dayjsObj) => {
    if (!dayjsObj) return '';
    const str = dayjsObj.format('ddd DD.MM.YYYY');
    return str[0].toUpperCase() + str.slice(1);
  },
  toTimeAndHybridDateString: (dayjsObj) => {
    if (!dayjsObj) return '';
    const str = dayjsObj.format('HH:mm ddd DD.MM.YYYY');
    return str.slice(0, 6) + str[6].toUpperCase() + str.slice(7);
  },
};

export default dateFormatter;
