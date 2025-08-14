import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Stethoscope, Activity, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Especializadas",
      description: "Atendimento médico personalizado com profissionais experientes e dedicados ao seu bem-estar.",
      features: ["Avaliação completa", "Diagnóstico preciso", "Tratamento personalizado", "Acompanhamento contínuo"],
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: Heart,
      title: "Cuidados Preventivos",
      description: "Programas de prevenção e promoção da saúde para manter você sempre em ótimas condições.",
      features: ["Check-ups regulares", "Exames preventivos", "Orientação nutricional", "Vacinação completa"],
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50"
    },
    {
      icon: Activity,
      title: "Monitoramento Contínuo",
      description: "Acompanhamento regular da sua saúde com tecnologia avançada e cuidado humanizado.",
      features: ["Monitoramento 24h", "Alertas personalizados", "Relatórios detalhados", "Suporte especializado"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Protocolos de Segurança",
      description: "Ambiente seguro e protegido, seguindo os mais rigorosos padrões de qualidade e higiene.",
      features: ["Protocolos rigorosos", "Ambiente esterilizado", "Equipamentos modernos", "Segurança total"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Atendimento Familiar",
      description: "Cuidados médicos para toda a família, desde bebês até idosos, com carinho e atenção especial.",
      features: ["Pediatria especializada", "Geriatria dedicada", "Saúde da mulher", "Medicina do trabalho"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Clock,
      title: "Disponibilidade Ampla",
      description: "Horários flexíveis e atendimento de urgência para quando você mais precisar de cuidados.",
      features: ["Horários flexíveis", "Atendimento urgente", "Suporte 24/7", "Agendamento fácil"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ]

  const benefits = [
    "Profissionais altamente qualificados",
    "Tecnologia médica de ponta",
    "Atendimento humanizado",
    "Protocolos de segurança rigorosos",
    "Acompanhamento personalizado",
    "Suporte contínuo ao paciente"
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-primary-25 to-accent-25 relative overflow-hidden">
      <div className="absolute top-20 left-10 opacity-5">
        <Heart className="w-96 h-96 text-accent-600 transform rotate-12" />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-5">
        <Stethoscope className="w-80 h-80 text-primary-600 transform -rotate-12" />
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
            Nossos Serviços
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-8">
            Cuidados completos para
            <span className="gradient-text block">sua saúde e bem-estar</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços médicos especializados, sempre com foco na 
            excelência, segurança e no cuidado humanizado que você e sua família merecem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className={`${service.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm relative overflow-hidden group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-secondary-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="bg-white rounded-3xl p-12 shadow-2xl border border-secondary-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-medical opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-accent opacity-5 rounded-full transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-medical p-3 rounded-xl shadow-lg mr-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-secondary-800">
                    Por que escolher nossos serviços?
                  </h3>
                </div>
                
                <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                  Nosso compromisso é oferecer cuidados médicos excepcionais, combinando 
                  tecnologia avançada com o toque humano que faz toda a diferença na sua experiência.
                </p>
                
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary text-xl px-12 py-5"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-6 h-6 mr-3 inline" />
                  Entre em contato e descubra mais sobre nossos serviços
                  <ArrowRight className="w-5 h-5 ml-3 inline" />
                </motion.button>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-primary-50 rounded-2xl p-6 shadow-md"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="bg-gradient-medical p-2 rounded-lg mr-4 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-secondary-700">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}