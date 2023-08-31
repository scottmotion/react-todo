import { createContext, useState, useEffect, MouseEvent } from 'react';

export const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    var htmlElement = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme(e: MouseEvent) {
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
        <div className="flex content-between items-center">
          <h1 className="text-4xl font-bold tracking-[0.5em] text-white">
            TODO
          </h1>
          <p onClick={e => toggleTheme(e)}>ICON</p>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
