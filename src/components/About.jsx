import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award, Clock, MapPin, Stethoscope, Activity } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Tratamos cada paciente com carinho, respeito e atenção individualizada, priorizando sempre o bem-estar e conforto."
    },
    {
      icon: Shield,
      title: "Segurança e Qualidade",
      description: "Seguimos os mais rigorosos protocolos de segurança e qualidade, garantindo excelência em todos os procedimentos."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e em constante atualização para oferecer o melhor cuidado médico."
    },
    {
      icon: Award,
      title: "Excelência Reconhecida",
      description: "Comprometimento com a excelência e inovação, sempre buscando os melhores resultados para nossos pacientes."
    }
  ]

  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Pacientes Atendidos",
      color: "text-primary-600"
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      color: "text-accent-600"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Satisfação dos Pacientes",
      color: "text-green-600"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Suporte Disponível",
      color: "text-blue-600"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-5">
        <Stethoscope className="w-96 h-96 text-primary-600 transform rotate-12" />
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-5">
        <Activity className="w-80 h-80 text-accent-600 transform -rotate-12" />
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
            Sobre Nós
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-secondary-800 mb-8">
            Transformando vidas com
            <span className="gradient-text block">saúde e bem-estar</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Somos uma equipe dedicada a oferecer cuidados médicos excepcionais, combinando expertise técnica 
            com o carinho e atenção que cada paciente merece. Nosso compromisso é ser seu parceiro de confiança 
            na jornada pela saúde e qualidade de vida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-secondary-800 mb-8">
              Nossos Valores e Compromissos
            </h3>
            
            <p className="text-lg text-secondary-600 mb-12 leading-relaxed">
              Acreditamos que cada pessoa merece receber cuidados médicos de alta qualidade, 
              em um ambiente acolhedor e seguro. Nossa missão é proporcionar uma experiência 
              única e personalizada para cada paciente.
            </p>

            <div className="space-y-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="bg-gradient-medical p-3 rounded-xl shadow-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary-800 mb-3">{value.title}</h4>
                      <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="card-medical text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <div className={`${stat.color} mb-4`}>
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className={`text-4xl font-bold ${stat.color} mb-3`}>
                      {stat.number}
                    </div>
                    <div className="text-secondary-600 font-semibold">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div
              className="absolute -inset-4 bg-gradient-medical opacity-5 rounded-3xl"
              animate={{ rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        <motion.div
          className="bg-white rounded-3xl p-12 shadow-2xl border border-secondary-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-medical opacity-5 rounded-full transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-medical p-6 rounded-full shadow-lg">
                <MapPin className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h3 className="text-4xl font-bold text-secondary-800 mb-6">
              Seu parceiro de confiança na área da saúde
            </h3>
            
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para cuidar de você e sua família com dedicação, expertise e o carinho 
              que vocês merecem. Junte-se a milhares de pacientes que confiam em nossa equipe 
              para uma vida mais saudável e feliz.
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
              Fale com nossos especialistas!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}