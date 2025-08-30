import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Projects", path: "/projects" },
  { id: 3, name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between lg:space-x-8 space-x-4 py-6 ">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h3 className="cursor-pointer font-bold text-3xl md:text-3xl text-white">
            SRK<span className="text-teal-400">.</span>
          </h3>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm md:text-base">
          {navData.map((nav) => (
            <NavLink key={nav.id} to={nav.path}
              className={({ isActive }) =>
                `uppercase transition-colors ${
                  isActive
                    ? "text-teal-400 font-semibold"
                    : "text-gray-300 hover:text-teal-300 "
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </header>

      {/* Backdrop (click to close) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Side Panel for Mobile */}
      <div className={`fixed top-0 right-0 h-screen w-52 bg-[hsla(234,86%,3%,0.98)] text-white flex flex-col items-start px-6 py-10 space-y-6 transform transition-transform duration-500 md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navData.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.path}
            onClick={() => setIsMenuOpen(false)} // close on link click too
            className={({ isActive }) =>
              `uppercase text-lg transition-colors ${
                isActive
                  ? "text-teal-400 font-semibold"
                  : "text-gray-300 hover:text-teal-300"
              }`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Header;
