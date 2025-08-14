import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Stethoscope, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre Nós', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Contato', href: 'contact' }
  ]

  const services = [
    'Consultas Especializadas',
    'Cuidados Preventivos',
    'Monitoramento Contínuo',
    'Atendimento Familiar'
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-accent-900/20"></div>
      
      <div className="absolute top-10 left-10 opacity-5">
        <Stethoscope className="w-64 h-64 text-white transform rotate-12" />
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-5">
        <Heart className="w-48 h-48 text-white transform -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="pt-20 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-3 mb-8 cursor-pointer"
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-gradient-medical p-3 rounded-xl shadow-lg">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold">brunobrunossss</span>
              </motion.div>
              
              <p className="text-lg text-secondary-300 mb-8 leading-relaxed max-w-md">
                Cuidando de você com dedicação e expertise. Transformando vidas com saúde e bem-estar. 
                Seu parceiro de confiança na área da saúde.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 text-secondary-300 hover:text-white transition-colors group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-primary-600 p-3 rounded-lg shadow-lg group-hover:bg-primary-500 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">Informações em breve</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 text-secondary-300 hover:text-white transition-colors group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-accent-600 p-3 rounded-lg shadow-lg group-hover:bg-accent-500 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">Informações em breve</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 text-secondary-300 hover:text-white transition-colors group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-green-600 p-3 rounded-lg shadow-lg group-hover:bg-green-500 transition-colors">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">Informações em breve</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Links Rápidos</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-lg text-secondary-300 hover:text-white transition-all duration-300 hover:translate-x-2 block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Nossos Serviços</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="text-lg text-secondary-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="mt-8 bg-gradient-medical text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5 mr-2 inline" />
                Agendar Consulta
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-secondary-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-300 text-lg mb-4 md:mb-0">
              © 2024 brunobrunossss. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-secondary-400">Criado com</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Papum
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-medical text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}