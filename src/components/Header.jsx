import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', to: 'home' },
    { name: 'À propos', to: 'about' },
    { name: 'Projets', to: 'projects' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-black/50 backdrop-blur-sm rounded-full"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.div
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 10 : 0,
            }}
            className="w-full h-0.5 bg-white"
          />
          <motion.div
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            className="w-full h-0.5 bg-white"
          />
          <motion.div
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -10 : 0,
            }}
            className="w-full h-0.5 bg-white"
          />
        </div>
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: isOpen ? 0 : "-100%",
        }}
        transition={{ type: "spring", bounce: 0.25 }}
        className="fixed top-0 left-0 w-[300px] h-screen bg-black/50 backdrop-blur-md z-40 border-r border-white/10"
      >
        <div className="flex flex-col h-full">
          <div className="p-8">
            <h2 className="text-xl font-bold">Dany/Vassiliakos</h2>
          </div>

          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <motion.li
                  key={item.to}
                  whileHover={{ x: 10 }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="p-8">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dany.Vass
            </div>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
};

export default Header; 