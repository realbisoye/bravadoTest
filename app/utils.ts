import _data from './data.json';
import {Person} from './Card'

export const data = _data as Person[];

export const isMatch = (texts: string[],field: string) => {
  const match = texts.find((t) => field.toLowerCase().indexOf(t.toLowerCase()) > -1)
  return !!match
}

export const search = (texts: string[]): Person[] => {
  return data.filter((item: Person) => {
    const {name, title, email,address, city} = item;
    return (
      isMatch(texts, name) ||
      isMatch(texts, title) ||
      isMatch(texts, email) ||
      isMatch(texts, address) ||
      isMatch(texts, city)
    );
  });
};

export const debounce = (callback: any) => {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args)
    }, 300);
  }
}
