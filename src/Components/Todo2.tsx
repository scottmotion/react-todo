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
      className={`group flex items-center rounded-t-md border-b border-very-light-gray-blue bg-white px-3 dark:border-very-dark-gray-blue-2 dark:bg-very-dark-desaturated-blue ${
        props.isOverlay ? 'cursor-grabbing' : ''
      } `}
    >
      {/* <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"> */}
      {/* <span className="relative text-white">annoyed</span> */}
      {/* </span> */}
      <button
        disabled={props.isOverlay}
        onClick={handleToggleCompleted}
        className={`aspect-square shrink-0 rounded-full border border-very-light-gray-blue p-1.5 dark:border-very-dark-gray-blue-2 ${
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
        {...props.listeners} // SortableItem
        type="text"
        placeholder="Create new todo..."
        value={props.todo.title}
        disabled
        className={`w-full rounded-md bg-white p-3 dark:bg-very-dark-desaturated-blue dark:text-white ${
          props.todo.isCompleted ? 'line-through opacity-50' : ''
        }
        ${props.isOverlay ? 'cursor-grabbing' : 'cursor-grab'} ${
          props.isDragging ? 'invisible' : ''
        }`}
      />
      <button
        className={`invisible shrink-0 group-hover:visible ${
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

// [background:linear-gradient(#ccc_0_0)_padding-box,linear-gradient(to_right,#9c20aa,#fb3570)_border-box]

//     [border-image:linear-gradient(to_right,#787878,rgba(0,0,0,0))_1_0%]
