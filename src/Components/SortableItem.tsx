import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Todo2 } from './Todo2';

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

  return (
    <Todo2
      id={props.todo.id}
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
