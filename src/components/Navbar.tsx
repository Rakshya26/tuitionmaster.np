import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronRight, UserPlus, LogIn } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Tutors', path: '/tutors' },
    { name: 'Tuition Jobs', path: '/jobs' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200 py-3" 
          : "bg-white border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-primary/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-gray-900 block leading-none">Home Tuition Master</span>
              <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Nepal</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === link.path ? "text-primary" : "text-gray-600"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <Link to="/become-tutor" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors mr-2">
                Become a Tutor
              </Link>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-primary/20">
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3 border-b border-gray-50 text-base font-medium",
                    location.pathname === link.path ? "text-primary" : "text-gray-700"
                  )}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
              <Link
                to="/become-tutor"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-gray-50 text-base font-medium text-gray-700"
              >
                Become a Tutor
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 bg-gray-50 text-gray-700 border border-gray-200 px-5 py-3 rounded-xl text-base font-medium transition-colors hover:bg-gray-100">
                  <LogIn className="w-5 h-5 cursor-pointer" />
                  <span>Login</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-5 py-3 rounded-xl text-base font-medium shadow-md shadow-primary/20 transition-all">
                  <UserPlus className="w-5 h-5 cursor-pointer" />
                  <span>Register</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
