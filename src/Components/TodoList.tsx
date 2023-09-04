import Todo from './Todo';
import { TodoType } from '../Types/TodoType';

type TodoListType = {
  todos: TodoType[];
  activeFilter: string;
  deleteTodo: any;
  toggleIsCompleted: any;
};

export default function TodoList({
  todos,
  activeFilter,
  deleteTodo,
  toggleIsCompleted,
}: TodoListType) {
  function handleClearCompleted() {
    console.log('HANDLE CLEAR');
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
      <div className="flex w-full items-center justify-between p-3">
        <p>
          {todos.filter(todo => todo.isCompleted === false).length} items left
        </p>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}
