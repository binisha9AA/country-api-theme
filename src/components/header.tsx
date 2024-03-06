import { FaMoon } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';

export default function Header({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleDarkModeChanger() {
    setIsDarkMode(!isDarkMode); // No need to return here
  }

  return (
    <header className="flex justify-between container py-5">
      <h4
        className={`${
          isDarkMode ? 'text-white ' : 'text-black'
        } font-semibold text-xl`}
      >
        Where in the world?
      </h4>

      <button
        className="flex items-center gap-2"
        onClick={handleDarkModeChanger}
      >
        {isDarkMode ? <FaMoon className="fill-white" /> : <FaRegMoon />}
        <p
          className={`${
            isDarkMode ? 'text-white ' : 'text-black'
          } font-semibold text-base`}
        >
          Dark Mode
        </p>
      </button>
    </header>
  );
}
