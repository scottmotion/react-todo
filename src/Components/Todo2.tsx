import { RefObject, forwardRef } from 'react';
import { ReactComponent as CheckIcon } from '/src/assets/icon-check.svg';
import { ReactComponent as CrossIcon } from '/src/assets/icon-cross.svg';
import { TodoType } from '../Types/TodoType';
type TodoProps = {
  id: string;
  style?: { [propName: string]: any };
  todo: TodoType;
  attributes?: any;
  listeners?: any;
  deleteTodo: (arg0: string) => void;
  toggleIsCompleted: (arg0: string) => void;
  isDragging?: boolean;
  isOverlay?: boolean;
};
export const Todo2 = forwardRef(({ ...props }: TodoProps, ref) => {
  function handleToggleCompleted() {
    props.toggleIsCompleted(props.id);
  }
  function handleDeleteTodo() {
    props.deleteTodo(props.id);
  }
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>} // SortableItem
      style={props.style}
      className={`flex items-center rounded-t-md border-b border-very-light-gray-blue bg-white px-3 dark:border-very-dark-gray-blue-2 dark:bg-very-dark-desaturated-blue ${
        props.isOverlay ? 'cursor-grabbing rounded-md' : ''
      }`}
    >
      <button
        disabled={props.isOverlay}
        onClick={handleToggleCompleted}
        className={`aspect-square shrink-0 rounded-full border border-very-light-gray-blue p-1.5 dark:border-very-dark-gray-blue-2 ${
          props.todo.isCompleted
            ? 'bg-gradient-to-br from-check-bg-start to-check-bg-end stroke-white'
            : 'stroke-none'
        } ${props.isOverlay ? 'cursor-grabbing' : ''}`}
      >
        <CheckIcon />
      </button>
      <input
        {...props.attributes} // SortableItem
        {...props.listeners} // SortableItem
        type="text"
        // style={{ cursor: 'inherit' }}
        placeholder="Create new todo..."
        value={props.todo.title}
        disabled
        className={`w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white ${
          props.todo.isCompleted ? 'line-through opacity-50' : ''
        }
        ${props.isOverlay ? 'cursor-grabbing' : 'cursor-grab'}`}
      />
      <button
        className={`shrink-0  ${props.isOverlay ? 'cursor-grabbing' : ''}`}
        onClick={handleDeleteTodo}
        disabled={props.isOverlay}
      >
        <CrossIcon />
      </button>
    </div>
  );
});

//  ${
//           props.isDragging === true
//             ? 'cursor-grabbing disabled:cursor-grabbing'
//             : 'cursor-grab disabled:cursor-grab'
//         }
