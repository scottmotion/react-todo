import { TodoType } from '../Types/TodoType';
import { ReactComponent as CheckIcon } from '/src/assets/icon-check.svg';
import { ReactComponent as CrossIcon } from '/src/assets/icon-cross.svg';

type TodoProps = {
  todo: TodoType;
};

export default function Todo({ todo }: TodoProps) {
  return (
    <div className="dark:border-very-dark-gray-blue-2 flex items-center border-b border-very-light-gray-blue px-3">
      <button
        className={`dark:border-very-dark-gray-blue-2 shrink-0 rounded-full border border-very-light-gray-blue p-1.5 ${
          todo.isCompleted
            ? 'from-check-bg-start to-check-bg-end bg-gradient-to-br'
            : ''
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
          todo.isCompleted ? 'line-through' : ''
        }`}
      />
      <button className="shrink-0">
        <CrossIcon />
      </button>
    </div>
  );
}
