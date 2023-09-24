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
    <div className="flex w-full items-center justify-center gap-6 rounded-md bg-white p-4 text-base dark:bg-very-dark-desaturated-blue dark:text-white md:hidden">
      {filters.map((filter, index) => (
        <button
          className={`${
            filter === activeFilter
              ? 'text-bright-blue opacity-100'
              : 'opacity-50'
          } text-sm hover:opacity-100`}
          key={index}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
