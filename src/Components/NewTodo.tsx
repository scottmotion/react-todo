type NewTodoProps = {
  addTodo: any;
};

export default function NewTodo({ addTodo }: NewTodoProps) {
  function handleChange() {
    console.log('HANDLE CHANGE');
  }
  function handleSubmit() {
    console.log('HANDLE SUBMIT');
    addTodo();
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
