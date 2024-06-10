'use client';
import {usePerson} from '@/hooks/usePerson';
import React from 'react';
import {ArrowIndicator} from '../ArrowIndicator';

const Table = () => {
  const {people, handleSort, sortProperty, sortOrder} = usePerson();
  const activePeople = people.filter(person => person.Status === 'Active');
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th
              className={`py-2 px-4 border-b cursor-pointer ${sortProperty === 'Name' ? 'text-gray-900' : 'text-gray-500'}`}
              onClick={() => handleSort('Name')}>
              Name
              {sortProperty === 'Name' && (
                <ArrowIndicator sortOrder={sortOrder} />
              )}
            </th>
            <th
              className={`py-2 px-4 border-b cursor-pointer ${sortProperty === 'Date' ? 'text-gray-900' : 'text-gray-500'}`}
              onClick={() => handleSort('Date')}>
              Date
              {sortProperty === 'Date' && (
                <ArrowIndicator sortOrder={sortOrder} />
              )}
            </th>
            <th
              className={`py-2 px-4 border-b cursor-pointer ${sortProperty === 'Favorite Movie' ? 'text-gray-900' : 'text-gray-500'}`}
              onClick={() => handleSort('Favorite Movie')}>
              Favorite Movie
              {sortProperty === 'Favorite Movie' && (
                <ArrowIndicator sortOrder={sortOrder} />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {activePeople.map((person, index) => (
            <tr key={index} className="hover:bg-gray-100 text-gray-900">
              <td className="py-2 px-4 border-b">{person.Name}</td>
              <td className="py-2 px-4 border-b">{person.Date}</td>
              <td className="py-2 px-4 border-b">{person['Favorite Movie']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
