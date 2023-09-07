type TodoFiltersProps = {
  filters: string[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function TodoFilters({
  filters,
  activeFilter,
  setActiveFilter,
}: TodoFiltersProps) {
  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white md:hidden">
      {filters.map((filter, index) => (
        <button
          className={`${
            filter === activeFilter ? 'text-bright-blue' : ''
          } text-lg`}
          key={index}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
