import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
import ThemeToggle from './Components/ThemeToggle';
import Todo from './Components/Todo';
import NewTodo from './Components/NewTodo';
import { TodoType } from './Types/TodoType';

import './App.css';

export const ThemeContext = createContext('light');

const myTodos: TodoType[] = [
  { title: 'Todo 1' },
  { title: 'Todo 2' },
  { title: 'Todo 3' },
  { title: 'Todo 4' },
  { title: 'Todo 5' },
  { title: 'Todo 6' },
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
          {/* <div className="flex flex-col gap-4 rounded-md bg-white p-4 dark:bg-very-dark-desaturated-blue dark:text-white">
            {todos.map((todo, index) => (
              <div key={index}>{todo.title}</div>
            ))}
          </div> */}
          <div className="flex flex-col rounded-md bg-white dark:bg-very-dark-desaturated-blue dark:text-white">
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} />
            ))}
            <div className="flex w-full items-center justify-between p-3">
              <p>5 Items</p>
              <p>Clear</p>
            </div>
          </div>
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
