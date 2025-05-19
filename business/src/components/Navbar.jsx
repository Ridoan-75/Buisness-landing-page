import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
      }}
      className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-gray-100 shadow-sm'
    >
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>

        {/* logo */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
          <div className='w-4 h-4 -ml-2 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
        </div>

        {/* desktop navbar */}
        <div className='hidden md:flex items-center gap-10'>
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className={`text-sm font-medium relative
                after:absolute after:bottom-0 after:left-0 after:h-0.5
                hover:after:w-full after:bg-blue-600 after:transition-all
                ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* get in touch button */}
        <motion.button
          className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200 cursor-pointer'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }}
        >
          <a href="#newsletter">Get in touch</a>
        </motion.button>

        {/* mobile nav toggle button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
          {isMenuOpen ? <HiX className='size-6' /> : <HiMenu />}
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='md:hidden bg-white border-t border-gray-100 py-4'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", transition: { duration: 0.3 } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
          >
            <div className='container mx-auto px-4 space-y-4'>
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`block text-sm font-medium py-2
                    ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                className='w-full md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200 cursor-pointer'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              >
                <a href="#newsletter">Get in touch</a>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
