import {Product} from '../modules/products';

/**
 * Given a list of products
 * returns a list of unique Dates
 * @param data Product[]
 * @returns Date[]
 */
export const getUniqueMonths = (data: Product[]) => {
  const uniqueDates: Date[] = [];
  data.forEach(obj => {
    const date = new Date(obj.createdAt);
    const monthYear = new Date(date.getFullYear(), date.getMonth(), 1);
    const exists = uniqueDates.find(d => d.getTime() === monthYear.getTime());
    if (!exists) {
      uniqueDates.push(monthYear);
    }
  });
  return uniqueDates;
};

export const filterByMonthAndYear = (date: Date, data: Product[]) => {
  const monthYear = new Date(date.getFullYear(), date.getMonth(), 1);
  return data.filter(obj => {
    const objDate = new Date(obj.createdAt);
    return (
      objDate.getFullYear() === monthYear.getFullYear() &&
      objDate.getMonth() === monthYear.getMonth()
    );
  });
};
