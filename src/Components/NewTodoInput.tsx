import { useState } from 'react';
import { TodoType } from '../Types/TodoType';
import { v4 as uuidv4 } from 'uuid';

type NewTodoProps = {
  addTodo: (newTodo: TodoType) => void;
};

export default function NewTodoInput({ addTodo }: NewTodoProps) {
  const defaultTodo: TodoType = {
    id: uuidv4(),
    title: '',
    isCompleted: false,
  };
  const [newTodo, setNewTodo] = useState(defaultTodo);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
    console.log('newTodo: ', newTodo);
    addTodo(newTodo);
    setNewTodo(defaultTodo);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Create new todo..."
        className="w-full rounded-md bg-white p-4 text-xs focus:outline-none dark:bg-very-dark-desaturated-blue dark:text-white md:p-5 md:text-lg"
        onChange={e => handleChange(e)}
        onKeyDown={e => handleKeyDown(e)}
        value={newTodo.title}
      />
    </div>
  );
}
