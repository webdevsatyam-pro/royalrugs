import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Home,
  LayoutGrid,
  Info,
  Phone,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Center Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Right Side Action Icons
  const actionIcons = [
    { icon: <Search size={22} />, href: "/search", label: "Search" },
    { icon: <ShoppingCart size={22} />, href: "/cart", label: "Cart" },
    { icon: <User size={22} />, href: "/profile", label: "Profile" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-950 border-b border-zinc-800 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* LEFT SIDE: Shop Name / Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 flex-1 lg:flex-none">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center text-zinc-950 font-serif font-bold text-xl">
              R
            </div>
            <span className="text-xl font-serif font-bold tracking-widest text-white uppercase">
              Royal<span className="text-amber-500">rugs</span>
            </span>
          </motion.a>

          {/* CENTER SIDE: Navigation Links (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center space-x-10 flex-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-zinc-400 hover:text-amber-500 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE: Action Icons (Desktop) */}
          <div className="hidden lg:flex items-center justify-end space-x-6 flex-1 lg:flex-none">
            {actionIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1, color: "#f59e0b" }} // amber-500
                whileTap={{ scale: 0.9 }}
                className="text-zinc-400 transition-colors cursor-pointer p-1"
                title={item.label}>
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* MOBILE TOGGLE (Icons + Hamburger) */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Cart icon mobile pe bhi dikhega */}
            <a href="/cart" className="text-zinc-400 relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-[10px] text-white px-1 rounded-full">
                0
              </span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-500">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Full Screen Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-zinc-950 z-40 lg:hidden flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif font-bold text-white uppercase tracking-widest">
                Royalrugs
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-400">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-light text-zinc-300 border-b border-zinc-900 pb-2 hover:text-amber-500 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto flex justify-around py-8 border-t border-zinc-900">
              {actionIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex flex-col items-center text-zinc-400">
                  {item.icon}
                  <span className="text-[10px] mt-1 uppercase tracking-tighter">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
