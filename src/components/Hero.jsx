import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, ChevronDown, Stethoscope, Activity } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Atendimento único para cada paciente"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protocolos rigorosos de segurança"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados"
    }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5"></div>
      
      <div className="absolute top-20 left-10 opacity-10">
        <Stethoscope className="w-64 h-64 text-primary-600 transform rotate-12" />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-10">
        <Activity className="w-48 h-48 text-accent-600 transform -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-secondary-800">Cuidando de</span>
              <br />
              <span className="gradient-text">você</span>
              <br />
              <span className="text-secondary-600 text-5xl lg:text-6xl">com dedicação</span>
            </motion.h1>

            <motion.p 
              className="text-xl lg:text-2xl text-secondary-600 mb-12 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transformando vidas com saúde e bem-estar. Seu parceiro de confiança na área da saúde, oferecendo cuidados especializados e personalizados.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-xl px-12 py-5"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-6 h-6 mr-3 inline" />
                Agende sua consulta agora!
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="btn-secondary text-xl px-12 py-5"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba mais sobre nós
              </motion.button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-medical p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-secondary-800 mb-2">{feature.title}</h3>
                    <p className="text-secondary-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <motion.div 
                className="bg-white rounded-3xl p-12 shadow-2xl border border-secondary-100"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="bg-gradient-medical p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Stethoscope className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                    Excelência em Saúde
                  </h3>
                  
                  <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                    Oferecemos atendimento médico de alta qualidade, combinando tecnologia moderna com o cuidado humano que você merece.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-primary-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                      <div className="text-sm text-secondary-600">Dedicação</div>
                    </div>
                    <div className="bg-accent-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-accent-600 mb-2">24/7</div>
                      <div className="text-sm text-secondary-600">Suporte</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-accent p-4 rounded-2xl shadow-lg z-20">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-primary-500 p-4 rounded-2xl shadow-lg z-20">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-medical opacity-5 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-accent opacity-5 rounded-3xl transform -rotate-2"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg border border-secondary-200">
          <ChevronDown className="w-6 h-6 text-primary-600" />
        </div>
      </motion.div>
    </section>
  )
}