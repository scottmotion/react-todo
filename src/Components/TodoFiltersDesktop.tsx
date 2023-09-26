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
    <div className="hidden w-auto items-center justify-center gap-6 rounded-md bg-white font-bold text-dark-gray-blue dark:bg-very-dark-desaturated-blue dark:text-dark-gray-blue-2 md:flex">
      <>
        {filters.map((filter, index) => (
          <button
            className={`${
              filter === activeFilter ? 'text-bright-blue' : ''
            } text-base hover:text-very-dark-gray-blue hover:dark:text-light-gray-blue-hover`}
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
