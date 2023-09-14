import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TodoType } from '../Types/TodoType';

import { Todo2 } from './Todo2';
import { UniqueIdentifier } from '@dnd-kit/core';
type SortableItemProps = {
  activeId: string | null;
  id: UniqueIdentifier;
  todo: TodoType;
  deleteTodo: (arg0: UniqueIdentifier) => void;
  toggleIsCompleted: (arg0: UniqueIdentifier) => void;
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

  let style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
      isDragging={isDragging}
    ></Todo2>
  );
}
