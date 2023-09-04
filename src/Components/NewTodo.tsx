import { useState } from 'react';
type NewTodoProps = {
  addTodo: any;
};

export default function NewTodo({ addTodo }: NewTodoProps) {
  const [newTodo, setNewTodo] = useState({ title: '', isCompleted: false });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('HANDLE CHANGE');
    const { value } = event.target;
    setNewTodo(prevNewTodo => ({
      ...prevNewTodo,
      title: value,
    }));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  function handleSubmit() {
    console.log('HANDLE SUBMIT');
    addTodo(newTodo);
    setNewTodo({ title: '', isCompleted: false });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Create new todo..."
        className="w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white"
        onChange={e => handleChange(e)}
        onKeyDown={e => handleKeyDown(e)}
        value={newTodo.title}
      />
    </div>
  );
}
