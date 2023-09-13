import { TodoType } from '../Types/TodoType';
import { ReactNode, useState } from 'react';

import { SortableItem } from './SortableItem';
import { Todo2 } from './Todo2';

import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
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
  setTodos: any;
  activeFilter: string;
  deleteTodo: (arg0: string) => void;
  toggleIsCompleted: (arg0: string) => void;
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
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleClearCompleted() {
    clearCompleted();
  }
  function handleDragStart(event: any) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTodos((todos: TodoType[]) => {
        const oldIndex = todos.findIndex(todo => todo.id === active.id);
        const newIndex = todos.findIndex(todo => todo.id === over.id);
        return arrayMove(todos, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }

  return (
    <div>
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
              <Todo2
                id={activeId}
                // style={{ border: '2px solid blue' }}
                todo={todos[todos.findIndex(todo => todo.id === activeId)]}
                deleteTodo={deleteTodo}
                toggleIsCompleted={toggleIsCompleted}
                isOverlay={true}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
      <div className="flex flex-col rounded-b-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white">
        <div className="flex w-full items-center justify-between p-3 text-sm">
          <p>
            {todos.filter(todo => todo.isCompleted === false).length} items left
          </p>
          {children}
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}
