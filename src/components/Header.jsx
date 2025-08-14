import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Heart, Stethoscope } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-medical' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Stethoscope 
                className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-primary-600'
                }`} 
              />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-800' 
                : 'text-secondary-800'
            }`}>
              brunobrunossss
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium text-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-secondary-800 hover:text-primary-600'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5 mr-2 inline" />
              Agendar Consulta
            </motion.button>
          </nav>

          <motion.button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-secondary-800' : 'text-secondary-800'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary-800' : 'text-secondary-800'}`} />
            )}
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-secondary-100 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-lg font-medium text-secondary-700 hover:text-primary-600 transition-colors py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Heart className="w-5 h-5 mr-2 inline" />
              Agendar Consulta
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}