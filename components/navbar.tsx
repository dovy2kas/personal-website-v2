import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-current-line text-foreground sticky top-0">
      <nav className="container mx-auto p-4 flex justify-between">
        <a href="#home" className="px-3 py-2 rounded hover:text-pink transition">
          Home
        </a>
        <a href="#about" className="px-3 py-2 rounded hover:text-pink transition">
          About
        </a>
        <a href="#projects" className="px-3 py-2 rounded hover:text-pink transition">
          Projects
        </a>
        <a href="#services" className="px-3 py-2 rounded hover:text-pink transition">
          Services
        </a>
        <a href="#contact" className="px-3 py-2 rounded hover:text-pink transition">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
