import { createContext, useState, useEffect, MouseEvent } from 'react';
import AppHeader from './Components/AppHeader';
export const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    var htmlElement = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
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
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <main className="flex flex-col items-center">
        <section className="mt-12 flex w-full max-w-xl px-6">
          <AppHeader toggleTheme={toggleTheme} />{' '}
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
