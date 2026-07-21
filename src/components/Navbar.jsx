import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-500">
          Textura Global
        </h2>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-lg font-medium">

          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">

          <ul className="flex flex-col text-center py-6 gap-6">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#portfolio">Portfolio</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;