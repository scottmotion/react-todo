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
    <div className="shadow-3xl-light dark:shadow-3xl-dark flex w-full items-center justify-center gap-6 rounded-md bg-white p-4 text-dark-gray-blue dark:bg-very-dark-desaturated-blue dark:text-white md:hidden">
      {filters.map((filter, index) => (
        <button
          className={`${
            filter === activeFilter ? 'text-bright-blue' : ''
          } text-sm hover:text-very-dark-gray-blue`}
          key={index}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
