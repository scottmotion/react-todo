import { useContext } from 'react';
import { ThemeContext } from '../App';
import { ReactComponent as LightModeIcon } from '/src/assets/icon-sun.svg';
import { ReactComponent as DarkModeIcon } from '/src/assets/icon-moon.svg';

type ThemeToggleProps = {
  toggleTheme: React.MouseEventHandler;
};

export default function ThemeToggle({ toggleTheme }: ThemeToggleProps) {
  const theme = useContext(ThemeContext);
  return (
    <button onClick={e => toggleTheme(e)}>
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}
