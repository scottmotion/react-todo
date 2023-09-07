import Todo from './Todo';
import { TodoType } from '../Types/TodoType';
import { ReactNode } from 'react';

type TodoListType = {
  children: ReactNode;
  todos: TodoType[];
  activeFilter: string;
  deleteTodo: (arg0: number) => void;
  toggleIsCompleted: (arg0: number) => void;
  clearCompleted: any;
};

export default function TodoList({
  children,
  todos,
  activeFilter,
  deleteTodo,
  toggleIsCompleted,
  clearCompleted,
}: TodoListType) {
  function handleClearCompleted() {
    console.log('HANDLE CLEAR');
    clearCompleted();
  }

  return (
    <div className="flex flex-col rounded-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white">
      {todos
        .filter(
          todo =>
            activeFilter === 'All' // All
              ? todo
              : activeFilter === 'Active' // Active
              ? !todo.isCompleted
              : todo.isCompleted, // Completed
        )
        .map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
          />
        ))}
      <div className="flex w-full items-center justify-between p-3 text-sm">
        <p>
          {todos.filter(todo => todo.isCompleted === false).length} items left
        </p>
        {children}
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}
