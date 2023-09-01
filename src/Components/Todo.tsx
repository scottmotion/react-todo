import { TodoType } from '../Types/TodoType';

type TodoProps = {
  todo: TodoType;
};

export default function Todo({ todo }: TodoProps) {
  return (
    <div className="border-b border-black border-very-light-gray-blue">
      <input
        type="text"
        placeholder="Create new todo..."
        value={todo.title}
        disabled
        className="w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white"
      />
    </div>
  );
}
