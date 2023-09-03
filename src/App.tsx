import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
import ThemeToggle from './Components/ThemeToggle';
import NewTodo from './Components/NewTodo';
import { TodoType } from './Types/TodoType';
import TodoList from './Components/TodoList';
import TodoFilters from './Components/TodoFilters';

import './App.css';

export const ThemeContext = createContext('light');

const myTodos: TodoType[] = [
  { title: 'Todo 1', isCompleted: true },
  { title: 'Todo 2', isCompleted: false },
  { title: 'Todo 3', isCompleted: false },
  { title: 'Todo 4', isCompleted: false },
  { title: 'Todo 5', isCompleted: false },
  { title: 'Todo 6', isCompleted: false },
];

function App() {
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState(myTodos);
  const filters: string[] = ['All', 'Active', 'Completed'];
  const [activeFilter, setActiveFilter] = useState(0);

  // Check if client prefers dark mode
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setTheme('dark');
  //   }
  // }, []);

  useEffect(() => {
    var htmlElement = document.getElementsByTagName('html')[0];
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    }
  }

  function addTodo() {
    console.log('ADD TODO');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <main className="flex flex-col items-center">
        <section className="relative flex w-full">
          <img className="w-full content-header-mobile-light dark:content-header-mobile-dark md:content-header-desktop-light md:dark:content-header-desktop-dark"></img>
        </section>
        <section className="absolute mt-10 flex w-full max-w-xl flex-col gap-y-6 px-6 md:mt-20">
          <AppHeader>
            <ThemeToggle toggleTheme={toggleTheme} />
          </AppHeader>
          <NewTodo />
          <TodoList todos={todos} activeFilter={activeFilter} />
          <TodoFilters
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
