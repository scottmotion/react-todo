type TodoFiltersProps = {
  filters: string[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function TodoFiltersMobile({
  filters,
  activeFilter,
  setActiveFilter,
}: TodoFiltersProps) {
  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-md bg-white p-4 font-bold text-dark-gray-blue shadow-3xl-light dark:bg-very-dark-desaturated-blue dark:text-dark-gray-blue-2 dark:shadow-3xl-dark md:hidden">
      {filters.map((filter, index) => (
        <button
          aria-label={`Filter ${filter}`}
          className={`${
            filter === activeFilter ? 'text-bright-blue' : ''
          } text-sm hover:text-very-dark-gray-blue hover:dark:text-light-gray-blue-hover`}
          key={index}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
