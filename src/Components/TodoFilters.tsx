import { useState } from 'react';

export default function TodoFilters() {
  const filters = ['All', 'Active', 'Completed'];
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white">
      {/* <p>All</p>
      <p>Active</p>
      <p>Completed</p> */}
      {filters.map((filter, index) => (
        <button
          className={`${index === activeFilter ? 'text-bright-blue' : ''}`}
          key={index}
          onClick={() => setActiveFilter(index)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
