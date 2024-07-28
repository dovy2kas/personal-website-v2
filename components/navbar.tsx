
import { FaHouse, FaBook, FaUser, FaHandHoldingDollar, FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex w-full bg-current-line text-foreground sticky top-0 z-10">
      <nav className="container mx-auto p-4 flex justify-between">
        <a href="#home" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <FaHouse /> <span>Home</span>
        </a>
        <a href="#about" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <FaUser /> <span>About</span>
        </a>
        <a href="#projects" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <FaBook /> <span>Projects</span>
        </a>
        <a href="#services" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <FaHandHoldingDollar /> <span>Services</span>
        </a>
        <a href="#contact" className="px-3 py-2 rounded hover:text-pink transition flex flex-row space-x-2 items-center">
          <FaEnvelope /> <span>Contact</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
