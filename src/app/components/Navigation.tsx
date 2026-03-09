import { Link, useLocation } from "react-router";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a more "bold" appearance when at the top
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO SECTION - Bolder and more visible */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            {/* ICON + GLOW */}
            <div className="relative flex-shrink-0">
              <img
                src="/NewLogo.jpeg"
                alt="T-Solusion Logo"
                className="h-14 w-14 md:h-16 md:w-16 rounded-xl object-cover"
              />
              <div className="absolute -inset-1 bg-blue-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
            </div>

            {/* COMPANY NAME */}
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-br from-[#0CA7E6] to-[#064E6B] bg-clip-text text-transparent">
                T-Solusions Group
              </h1>
              <p className="text-sm text-gray-500">
                Innovate. Integrate. Elevate.
              </p>
              <p className="text-xs text-gray-400">
                Innovating Beyond Borders.
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION - High Contrast */}
          <div className="hidden md:flex items-center bg-gray-100/50 p-1.5 rounded-full border border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-[#0CA7E6] text-white shadow-md shadow-[#0CA7E6]"
                    : "text-gray-600 hover:text-[#0CA7E6] hover:bg-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON - Encourages action */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-green-600 transition-colors shadow-lg active:scale-95 flex items-center gap-2"
            >
              Get Started
              <Rocket size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-900 active:scale-90 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION - Animated Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 rounded-3xl p-4 border border-gray-100 shadow-inner">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-black mb-2 transition-all ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="h-2 w-2 bg-white rounded-full shadow-[0_0_8px_white]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
