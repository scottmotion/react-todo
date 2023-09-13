import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TodoType } from '../Types/TodoType';

import { Todo2 } from './Todo2';
type SortableItemProps = {
  activeId: string | null;
  id: string;
  todo: TodoType;
  deleteTodo: (arg0: string) => void;
  toggleIsCompleted: (arg0: string) => void;
};
export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  let style: { [propName: string]: any } = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

  // if (props.id === props.activeId) {
  //   // style.opacity = '.25';
  //   style.visibility = 'hidden';
  // }

  if (isDragging) {
    // console.log('Dragging');
    style.visibility = 'hidden';
  }
  return (
    <Todo2
      id={props.id}
      ref={setNodeRef}
      style={style}
      todo={props.todo}
      deleteTodo={props.deleteTodo}
      toggleIsCompleted={props.toggleIsCompleted}
      attributes={attributes}
      listeners={listeners}
    ></Todo2>
  );
}
