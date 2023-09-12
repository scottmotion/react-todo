// import Todo from './Todo';
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
    console.log('Drag Start: active: ', active);
    setActiveId(active.id);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;
    console.log('Drag End : active: ', active, ' over: ', over);
    if (active.id !== over.id) {
      setTodos((todos: TodoType[]) => {
        const oldIndex = todos.findIndex(todo => todo.id === active.id);
        const newIndex = todos.findIndex(todo => todo.id === over.id);
        console.log('Old index: ', oldIndex);
        console.log('New index: ', newIndex);

        return arrayMove(todos, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }

  return (
    <div className="flex flex-col rounded-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
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
                todo={todo}
                deleteTodo={deleteTodo}
                toggleIsCompleted={toggleIsCompleted}
              />
            ))}
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <Todo2
              id={activeId}
              todo={todos[todos.findIndex(todo => todo.id === activeId)]}
              deleteTodo={deleteTodo}
              toggleIsCompleted={toggleIsCompleted}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      <div className="flex w-full items-center justify-between p-3 text-sm">
        <p>
          {todos.filter(todo => todo.isCompleted === false).length} items left
        </p>
        {children}
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}
