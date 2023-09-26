import { TodoType } from '../Types/TodoType';
import { ReactNode, useState } from 'react';

import { SortableItem } from './SortableItem';
import { Todo } from './Todo';

import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

type TodoListType = {
  children: ReactNode;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  activeFilter: string;
  deleteTodo: (arg0: UniqueIdentifier) => void;
  toggleIsCompleted: (arg0: UniqueIdentifier) => void;
  clearCompleted: () => void;
};

export default function TodoList({
  children,
  todos,
  setTodos,
  activeFilter,
  deleteTodo,
  toggleIsCompleted,
  clearCompleted,
}: TodoListType) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 1000,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleClearCompleted() {
    clearCompleted();
  }
  function handleDragStart(event: DragStartEvent): void {
    const { active } = event;
    setActiveId(active.id.toString());
  }

  function handleDragEnd(event: DragEndEvent): void {
    const { active, over } = event;
    if (over !== null && active.id !== over.id) {
      setTodos((todos: TodoType[]) => {
        const oldIndex = todos.findIndex(todo => todo.id === active.id);
        const newIndex = todos.findIndex(todo => todo.id === over.id);
        return arrayMove(todos, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }

  return (
    <div className="shadow-3xl-light dark:shadow-3xl-dark">
      <div className="flex flex-col rounded-t-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext items={todos} strategy={verticalListSortingStrategy}>
            {todos
              .filter(
                todo =>
                  activeFilter === 'Completed' // Completed
                    ? todo.isCompleted
                    : activeFilter === 'Active' // Active
                    ? !todo.isCompleted
                    : todo, // All
              )
              .map(todo => (
                <SortableItem
                  key={todo.id}
                  activeId={activeId}
                  id={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  toggleIsCompleted={toggleIsCompleted}
                />
              ))}
          </SortableContext>
          <DragOverlay modifiers={[restrictToParentElement]}>
            {activeId ? (
              <Todo
                id={activeId}
                todo={todos[todos.findIndex(todo => todo.id === activeId)]}
                deleteTodo={deleteTodo}
                toggleIsCompleted={toggleIsCompleted}
                isOverlay={true}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
      <div className="flex flex-col rounded-b-md bg-white text-dark-gray-blue dark:bg-very-dark-desaturated-blue dark:text-dark-gray-blue-2">
        <div className="flex w-full items-center justify-between p-4 px-5 text-xs md:text-sm">
          <p>
            {todos.filter(todo => todo.isCompleted === false).length} items left
          </p>
          {children}
          <button
            onClick={handleClearCompleted}
            className="hover:text-very-dark-gray-blue hover:dark:text-light-gray-blue-hover"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}
