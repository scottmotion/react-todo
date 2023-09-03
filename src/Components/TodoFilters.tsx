type TodoFiltersProps = {
  filters: string[];
  activeFilter: number;
  setActiveFilter: React.Dispatch<React.SetStateAction<number>>;
};

export default function TodoFilters({
  filters,
  activeFilter,
  setActiveFilter,
}: TodoFiltersProps) {
  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white">
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
