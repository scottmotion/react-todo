import { useContext } from 'react';
import { ThemeContext } from '../App';
import { ReactComponent as LightModeIcon } from '/src/assets/icon-sun.svg';
import { ReactComponent as DarkModeIcon } from '/src/assets/icon-moon.svg';

export default function AppHeader({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-2xl font-bold tracking-[0.5em] text-white md:text-4xl">
        TODO
      </h1>
      <button onClick={e => toggleTheme(e)}>
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );
}
