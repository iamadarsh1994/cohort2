
import { useState } from "react";
import { Transition } from "@headlessui/react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex justify-end">
      <label className="flex items-center dark:text-gray-500" htmlFor="toggleA">
        <span className="mr-2">Dark Mode (beta)</span>
        <Transition
          enter="duration-200 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-100 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <input
            type="checkbox"
            role="switch"
            id="toggleA"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 mt-1 h-4 w-6 rounded-full flex items-center justify-center bg-gray-400 border-gray-500 appearance-none"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
        </Transition>
      </label>
    </div>
  );
}

export default DarkModeToggle;