import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
import ThemeToggle from './Components/ThemeToggle';
import NewTodoInput from './Components/NewTodoInput';
import { TodoType } from './Types/TodoType';
import TodoList from './Components/TodoList';
import TodoFiltersMobile from './Components/TodoFiltersMobile';
import TodoFiltersDesktop from './Components/TodoFiltersDesktop';
import { todoData } from './data';

import './App.css';
import { UniqueIdentifier } from '@dnd-kit/core';

export const ThemeContext = createContext('light');

const myTodos: TodoType[] = todoData;

function App() {
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState(myTodos);
  const filters: string[] = ['All', 'Active', 'Completed'];
  const [activeFilter, setActiveFilter] = useState('All');

  // Check if client prefers dark mode
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    var htmlElement = document.getElementsByTagName('html')[0];
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    }
  }

  function addTodo(newTodo: TodoType): void {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function toggleIsCompleted(id: UniqueIdentifier) {
    const nextTodos = todos.map(t => {
      if (t.id === id) {
        return { ...t, isCompleted: !t.isCompleted };
      } else {
        return t;
      }
    });

    setTodos(nextTodos);
  }

  function deleteTodo(id: UniqueIdentifier): void {
    setTodos(todos.filter(t => t.id !== id));
  }

  function clearCompleted(): void {
    setTodos(todos.filter(t => t.isCompleted !== true));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <main className="flex flex-col items-center">
        <section className="relative flex w-full select-none">
          <img className="w-full content-header-mobile-light dark:content-header-mobile-dark md:content-header-desktop-light md:dark:content-header-desktop-dark"></img>
        </section>
        <section className="absolute mt-11 flex w-full max-w-[37rem] flex-col gap-y-4 px-6 md:mt-[70px] md:gap-y-6">
          <AppHeader>
            <ThemeToggle toggleTheme={toggleTheme} />
          </AppHeader>
          <NewTodoInput addTodo={addTodo} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            activeFilter={activeFilter}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
            clearCompleted={clearCompleted}
          >
            <TodoFiltersDesktop
              filters={filters}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </TodoList>
          <TodoFiltersMobile
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <p className="mt-6 text-center text-sm text-dark-gray-blue dark:text-dark-gray-blue-2">
            Drag and drop to reorder list
          </p>
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
