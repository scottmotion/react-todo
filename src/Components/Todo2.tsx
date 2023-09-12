import { forwardRef } from 'react';
import { ReactComponent as CheckIcon } from '/src/assets/icon-check.svg';
import { ReactComponent as CrossIcon } from '/src/assets/icon-cross.svg';
import { TodoType } from '../Types/TodoType';
type TodoProps = {
  id: string;
  style?: any;
  todo: TodoType;
  attributes?: any;
  listeners?: any;
  deleteTodo: (arg0: string) => void;
  toggleIsCompleted: (arg0: string) => void;
};
export const Todo2 = forwardRef(({ ...props }: TodoProps, ref) => {
  function handleToggleCompleted() {
    props.toggleIsCompleted(props.todo.id);
  }
  function handleDeleteTodo() {
    props.deleteTodo(props.todo.id);
  }
  return (
    <div
      style={props.style}
      className="flex items-center border-b border-very-light-gray-blue bg-white px-3 dark:border-very-dark-gray-blue-2 dark:bg-very-dark-desaturated-blue"
    >
      <button
        onClick={handleToggleCompleted}
        className={`aspect-square shrink-0 rounded-full border border-very-light-gray-blue p-1.5 dark:border-very-dark-gray-blue-2 ${
          props.todo.isCompleted
            ? 'bg-gradient-to-br from-check-bg-start to-check-bg-end stroke-white'
            : 'stroke-none'
        }`}
      >
        <CheckIcon />
      </button>

      <input
        {...props.attributes}
        {...props.listeners}
        ref={ref}
        type="text"
        placeholder="Create new todo..."
        value={props.todo.title}
        disabled
        className={`w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white ${
          props.todo.isCompleted ? 'line-through opacity-50' : ''
        }`}
      />
      <button className="shrink-0" onClick={handleDeleteTodo}>
        <CrossIcon />
      </button>
    </div>
  );
});
