import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
import NewTodo from './Components/NewTodo';

import './App.css';

export const ThemeContext = createContext('light');

interface Todo {
  title: string;
}

const myTodos: Todo[] = [
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
          <img className="w-full" id="headerImage"></img>
        </section>
        <section className="absolute mt-10 flex w-full max-w-xl flex-col gap-y-6 px-6 md:mt-20">
          <AppHeader toggleTheme={toggleTheme} />
          <NewTodo />
          <div className="flex flex-col gap-4 bg-white p-4">
            {todos.map((todo, index) => (
              <div key={index}>{todo.title}</div>
            ))}
          </div>
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
