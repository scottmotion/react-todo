import { RefObject, forwardRef } from 'react';
import { ReactComponent as CheckIcon } from '/src/assets/icon-check.svg';
import { ReactComponent as CrossIcon } from '/src/assets/icon-cross.svg';
import { TodoType } from '../Types/TodoType';
import { DraggableAttributes, UniqueIdentifier } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
type TodoProps = {
  id: UniqueIdentifier;
  style?: React.CSSProperties;
  todo: TodoType;
  attributes?: DraggableAttributes;
  listeners?: SyntheticListenerMap | undefined;
  deleteTodo: (arg0: UniqueIdentifier) => void;
  toggleIsCompleted: (arg0: UniqueIdentifier) => void;
  isDragging?: boolean;
  isOverlay?: boolean;
};
export const Todo = forwardRef(({ ...props }: TodoProps, ref) => {
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
      className={`group flex items-center rounded-t-md border-b border-very-light-gray-blue bg-white p-4 dark:border-very-dark-gray-blue-2 dark:bg-very-dark-desaturated-blue md:p-5 ${
        props.isOverlay ? 'cursor-grabbing border-t' : ''
      } `}
    >
      <button
        disabled={props.isOverlay}
        onClick={handleToggleCompleted}
        className={`aspect-square shrink-0 rounded-full border border-very-light-gray-blue p-1 dark:border-very-dark-gray-blue-2 md:p-1.5 ${
          props.todo.isCompleted
            ? 'bg-gradient-to-br from-check-bg-start to-check-bg-end stroke-white'
            : 'relative inline-block from-check-bg-start to-check-bg-end stroke-none before:absolute before:-inset-0 before:m-0.5 before:block before:rounded-full before:bg-white hover:bg-gradient-to-br dark:before:bg-very-dark-desaturated-blue'
        } ${props.isOverlay ? 'cursor-grabbing' : ''} ${
          props.isDragging ? 'invisible' : ''
        }`}
      >
        <CheckIcon />
      </button>
      <input
        {...props.attributes} // SortableItem
        {...props.listeners} // SortableItems
        type="text"
        placeholder="Create new todo..."
        value={props.todo.title}
        disabled
        className={`w-full touch-none rounded-md bg-white px-5 text-xs dark:bg-very-dark-desaturated-blue md:text-lg ${
          props.todo.isCompleted
            ? 'text-light-gray-blue line-through dark:text-very-dark-gray-blue-1'
            : 'text-very-dark-gray-blue dark:text-light-gray-blue-2'
        }
        ${props.isOverlay ? 'cursor-grabbing' : 'cursor-grab'} ${
          props.isDragging ? 'invisible' : ''
        }`}
      />
      <button
        className={`shrink-0 text-lg text-dark-gray-blue hover:text-very-dark-gray-blue group-hover:visible dark:text-dark-gray-blue-2 hover:dark:text-light-gray-blue-hover md:visible md:text-[27px] ${
          props.isOverlay ? 'cursor-grabbing' : ''
        } ${props.isDragging ? 'invisible' : ''}`}
        onClick={handleDeleteTodo}
        disabled={props.isOverlay}
      >
        <CrossIcon />
      </button>
    </div>
  );
});
