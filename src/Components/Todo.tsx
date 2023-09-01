import { TodoType } from '../Types/TodoType';
import { ReactComponent as CheckIcon } from '/src/assets/icon-check.svg';
import { ReactComponent as CrossIcon } from '/src/assets/icon-cross.svg';

type TodoProps = {
  todo: TodoType;
};

export default function Todo({ todo }: TodoProps) {
  return (
    <div className="flex items-center border-b border-very-light-gray-blue px-3">
      <CheckIcon />
      <input
        type="text"
        placeholder="Create new todo..."
        value={todo.title}
        disabled
        className="w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white"
      />
      <CrossIcon />
    </div>
  );
}
