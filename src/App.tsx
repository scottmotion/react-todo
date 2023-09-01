import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
import NewTodo from './Components/NewTodo';

export const ThemeContext = createContext('light');

const myTodos = [{ title: 'Hello' }, { title: 'Hi' }];

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
        <section className="mt-20 flex w-full max-w-xl flex-col gap-y-6 px-6">
          <AppHeader toggleTheme={toggleTheme} />
          <NewTodo title={'Hello'} />
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
