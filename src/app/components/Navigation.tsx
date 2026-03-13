import { Link, useLocation } from "react-router"; // or 'react-router-dom'
import { Menu, X, Rocket, Scale } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed 'Terms' from main nav to treat it uniquely
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
          {/* LOGO SECTION */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <div className="relative flex-shrink-0">
              <img
                src="/no-background.png"
                alt="T-Solusion Logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-cover"
              />
              <div className="absolute -inset-1 bg-[#0CA7E6] rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-br from-[#0CA7E6] to-[#064E6B] bg-clip-text text-transparent">
                T-Solusions Group
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase">
                Innovate • Integrate • Elevate
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center bg-gray-100/50 p-1.5 rounded-full border border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-[#0CA7E6] text-white shadow-md shadow-blue-200"
                    : "text-gray-600 hover:text-[#0CA7E6] hover:bg-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ACTION SECTION: Terms + CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* UNIQUE TERMS LINK */}
            <Link
              to="/terms"
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 pb-0.5 ${
                isActive("/terms")
                  ? "text-[#0CA7E6] border-[#0CA7E6]"
                  : "text-gray-400 border-transparent hover:text-gray-900 hover:border-gray-900"
              }`}
            >
              <Scale size={14} />
              Policies
            </Link>

            <Link
              to="/contact"
              className="bg-[#0CA7E6] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#0a86b8] transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2"
            >
              Get Started
              <Rocket size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 rounded-3xl p-4 border border-gray-100 shadow-inner space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                  isActive(item.path)
                    ? "bg-[#0CA7E6] text-white"
                    : "text-gray-700 hover:bg-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="h-2 w-2 bg-white rounded-full" />
                )}
              </Link>
            ))}

            {/* Mobile-only Terms Link */}
            <Link
              to="/terms"
              className="flex items-center gap-3 px-6 py-4 text-gray-600 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Scale size={18} />
              Legal & Policies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
