export default function NewTodo({}) {
  function handleChange() {
    console.log('HANDLE CHANGE');
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Create new todo..."
        className="w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white"
        onChange={handleChange}
      />
    </div>
  );
}
