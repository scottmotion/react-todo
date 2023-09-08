import { TodoType } from '../Types/TodoType';
import { ReactComponent as CheckIcon } from '/src/assets/icon-check.svg';
import { ReactComponent as CrossIcon } from '/src/assets/icon-cross.svg';

type TodoProps = {
  index: number;
  todo: TodoType;
  deleteTodo: (arg0: number) => void;
  toggleIsCompleted: (arg0: number) => void;
};

export default function Todo({
  index,
  todo,
  deleteTodo,
  toggleIsCompleted,
}: TodoProps) {
  function handleToggleCompleted() {
    toggleIsCompleted(index);
  }
  function handleDeleteTodo() {
    deleteTodo(index);
  }
  return (
    <div className="flex items-center border-b border-very-light-gray-blue px-3 dark:border-very-dark-gray-blue-2">
      <button
        onClick={handleToggleCompleted}
        className={`aspect-square shrink-0 rounded-full border border-very-light-gray-blue p-1.5 dark:border-very-dark-gray-blue-2 ${
          todo.isCompleted
            ? 'bg-gradient-to-br from-check-bg-start to-check-bg-end stroke-white'
            : 'stroke-none'
        }`}
      >
        <CheckIcon />
      </button>

      <input
        type="text"
        placeholder="Create new todo..."
        value={todo.title}
        disabled
        className={`w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white ${
          todo.isCompleted ? 'line-through opacity-50' : ''
        }`}
      />
      <button className="shrink-0" onClick={handleDeleteTodo}>
        <CrossIcon />
      </button>
    </div>
  );
}
