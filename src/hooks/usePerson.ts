import {useState, useEffect} from 'react';

import {Person} from '@/interfaces';
import {initialPersons} from '@/data/initialPersons';

const formatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const addDateToActiveRecords = (people: Person[]): Person[] => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return people.map(person => {
    if (person.Status === 'Active') {
      return {...person, Date: formattedDate};
    }
    return person;
  });
};

const sortByProperty = (
  people: Person[],
  property: keyof Person,
  sortOrder: 'asc' | 'desc',
): Person[] => {
  return [...people].sort((a, b) => {
    const aValue = a[property] ?? '';
    const bValue = b[property] ?? '';

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
};
export const usePerson = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [sortProperty, setSortProperty] = useState<keyof Person>('Name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const updatedPersons = addDateToActiveRecords(initialPersons);
    setPeople(updatedPersons);
  }, []);

  useEffect(() => {
    const updatedPersons = addDateToActiveRecords(initialPersons);
    const sortedPeople = sortByProperty(
      updatedPersons,
      sortProperty,
      sortOrder,
    );
    setPeople(sortedPeople);
  }, [sortProperty, sortOrder]);

  const handleSort = (property: keyof Person) => {
    setSortProperty(property);
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return {people, handleSort, sortProperty, sortOrder};
};
