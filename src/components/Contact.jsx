import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Heart, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Entre em contato conosco",
      info: "Informações em breve",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua mensagem",
      info: "Informações em breve",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "Venha nos visitar",
      info: "Informações em breve",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      description: "Estamos disponíveis",
      info: "Segunda a Sexta: 8h às 18h",
      color: "from-blue-500 to-blue-600"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-5">
        <Heart className="w-96 h-96 text-accent-600 transform rotate-12" />
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-5">
        <Mail className="w-80 h-80 text-primary-600 transform -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-medical text-white px-6 py-3 rounded-full font-semibold text-lg mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Heart className="w-5 h-5 mr-2" />
            Entre em Contato
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-8">
            Estamos aqui para
            <span className="gradient-text block">cuidar de você</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Entre em contato conosco e agende sua consulta. Nossa equipe está pronta para 
            oferecer o melhor atendimento e cuidado que você merece.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary-800 mb-2">{info.title}</h3>
                    <p className="text-secondary-600 text-sm mb-2">{info.description}</p>
                    <p className="font-semibold text-secondary-700">{info.info}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-secondary-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="bg-gradient-medical p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                  Agende sua consulta agora!
                </h3>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo com todo carinho e dedicação. 
                  Entre em contato e descubra como podemos cuidar da sua saúde.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="btn-primary"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Ligar Agora
                  </motion.button>
                  <motion.button
                    className="btn-secondary"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5 mr-2 inline" />
                    Enviar E-mail
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-secondary-100 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-medical opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-secondary-800 mb-6 text-center">
                  Envie sua mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-semibold text-secondary-700 mb-3">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-800 bg-secondary-50"
                        placeholder="Seu nome completo"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-semibold text-secondary-700 mb-3">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-800 bg-secondary-50"
                        placeholder="(00) 00000-0000"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-800 bg-secondary-50"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-secondary-700 mb-3">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-4 rounded-xl border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors text-secondary-800 bg-secondary-50 resize-none"
                      placeholder="Como podemos ajudá-lo? Conte-nos sobre suas necessidades..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-secondary-400 cursor-not-allowed'
                        : 'bg-gradient-medical text-white hover:shadow-xl transform hover:scale-105'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-3" />
                        Enviar Mensagem
                      </span>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      className="flex items-center bg-green-50 border border-green-200 rounded-xl p-4 text-green-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      className="flex items-center bg-red-50 border border-red-200 rounded-xl p-4 text-red-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <AlertCircle className="w-5 h-5 mr-3" />
                      Erro ao enviar mensagem. Tente novamente.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}