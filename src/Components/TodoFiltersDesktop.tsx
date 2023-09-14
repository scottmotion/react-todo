type TodoFiltersProps = {
  filters: string[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function TodoFiltersDesktop({
  filters,
  activeFilter,
  setActiveFilter,
}: TodoFiltersProps) {
  return (
    <div className="hidden w-auto items-center justify-center gap-6 rounded-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white md:flex">
      <>
        {filters.map((filter, index) => (
          <button
            className={`${
              filter === activeFilter
                ? 'text-bright-blue opacity-100'
                : 'opacity-50 hover:opacity-100'
            } `}
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
