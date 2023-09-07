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
    <div className="hidden w-auto items-center justify-center gap-6 rounded-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white md:flex">
      <>
        {filters.map((filter, index) => (
          <button
            className={`${filter === activeFilter ? 'text-bright-blue' : ''} `}
            key={index}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </>
    </div>
  );
}
