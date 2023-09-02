import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
import ThemeToggle from './Components/ThemeToggle';
import Todo from './Components/Todo';
import NewTodo from './Components/NewTodo';
import { TodoType } from './Types/TodoType';

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

  return (
    <ThemeContext.Provider value={theme}>
      <main className="flex flex-col items-center">
        <section className="relative flex w-full">
          <img className="content-header-mobile-light md:content-header-desktop-light md:dark:content-header-desktop-dark dark:content-header-mobile-dark w-full"></img>
        </section>
        <section className="absolute mt-10 flex w-full max-w-xl flex-col gap-y-6 px-6 md:mt-20">
          <AppHeader>
            <ThemeToggle toggleTheme={toggleTheme} />
          </AppHeader>
          <NewTodo />
          <div className="flex flex-col rounded-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white">
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
            <div className="flex w-full items-center justify-between p-3">
              <p>
                {todos.filter(todo => todo.isCompleted === false).length} items
                left
              </p>
              <p>Clear Completed</p>
            </div>
          </div>
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
