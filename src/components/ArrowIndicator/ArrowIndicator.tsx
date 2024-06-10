import React from 'react';

type ArrowIndicatorProps = {
  sortOrder: 'asc' | 'desc';
};

const ArrowIndicator = ({sortOrder}: ArrowIndicatorProps) => {
  return (
    <span className="text-gray-900 text-sm ml-4">
      {sortOrder === 'asc' ? '↑' : '↓'}
    </span>
  );
};

export default ArrowIndicator;
