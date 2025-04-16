import {
  FaHouse,
  FaBook,
  FaUser,
  FaEnvelope,
} from "react-icons/fa6";

import Icon from "./icon";

const Navbar = () => {
  return (
    <div className="flex w-full bg-current-line text-foreground sticky top-0 z-10">
      <nav className="container mx-auto p-4 flex justify-between">
        <a href="#home" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <span className="text-2xl md:text-md">
            <Icon icon={FaHouse} />
          </span>
          <span className="hidden md:flex">Home</span>
        </a>
        <a href="#about" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <span className="text-2xl md:text-md">
            <Icon icon={FaUser} />
          </span>
          <span className="hidden md:flex">About</span>
        </a>
        <a href="#projects" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <span className="text-2xl md:text-md">
            <Icon icon={FaBook} />
          </span>
          <span className="hidden md:flex">Projects</span>
        </a>
        <a href="#contact" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <span className="text-2xl md:text-md">
            <Icon icon={FaEnvelope} />
          </span>
          <span className="hidden md:flex">Contact</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
