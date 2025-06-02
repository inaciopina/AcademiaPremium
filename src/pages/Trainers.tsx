import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, Award } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null);

  const trainers = [
    {
      id: 1,
      name: 'João Silva',
      role: 'Personal Trainer',
      specialties: ['Hipertrofia', 'Força', 'Reabilitação'],
      experience: '8 anos',
      certifications: ['Cref 123456', 'CrossFit L1', 'Nutrição Esportiva'],
      bio: 'Especialista em treinamento de força e hipertrofia, com experiência em atletas de alto rendimento.',
      social: {
        instagram: '@joaosilva',
        facebook: 'joaosilva.pt',
        twitter: '@joaosilva',
      },
      contact: {
        email: 'joao@academia.com',
        phone: '(11) 99999-9999',
      },
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Instrutora de Pilates',
      specialties: ['Pilates', 'Postura', 'Flexibilidade'],
      experience: '5 anos',
      certifications: ['Pilates Studio', 'Fisioterapia', 'Yoga'],
      bio: 'Especialista em Pilates e correção postural, ajudando alunos a melhorarem sua qualidade de vida.',
      social: {
        instagram: '@mariasantos',
        facebook: 'mariasantos.pilates',
        twitter: '@mariasantos',
      },
      contact: {
        email: 'maria@academia.com',
        phone: '(11) 98888-8888',
      },
    },
    {
      id: 3,
      name: 'Pedro Oliveira',
      role: 'Treinador Funcional',
      specialties: ['Funcional', 'Emagrecimento', 'Condicionamento'],
      experience: '6 anos',
      certifications: ['Funcional Training', 'Nutrição', 'Primeiros Socorros'],
      bio: 'Especialista em treinamento funcional e emagrecimento, com foco em resultados práticos.',
      social: {
        instagram: '@pedrooliveira',
        facebook: 'pedrooliveira.funcional',
        twitter: '@pedrooliveira',
      },
      contact: {
        email: 'pedro@academia.com',
        phone: '(11) 97777-7777',
      },
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={IMAGES.trainer1}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 backdrop-blur-sm" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Nossos Instrutores
          </h1>
          <p className="text-xl text-white/80">
            Profissionais dedicados ao seu sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 cursor-pointer ${
                selectedTrainer === trainer.id ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setSelectedTrainer(trainer.id)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {trainer.name}
                </h3>
                <p className="text-white/80">{trainer.role}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Especialidades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm bg-white/20 text-white"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Experiência
                  </h4>
                  <p className="text-white/80">{trainer.experience}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Certificações
                  </h4>
                  <div className="space-y-1">
                    {trainer.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center text-white/80">
                        <Award className="w-4 h-4 mr-2 text-white" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={`https://instagram.com/${trainer.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://facebook.com/${trainer.social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/${trainer.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedTrainer !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {trainers[selectedTrainer - 1].name}
                  </h2>
                  <p className="text-white/80">
                    {trainers[selectedTrainer - 1].role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="text-white/60 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Sobre
                  </h3>
                  <p className="text-white/80">
                    {trainers[selectedTrainer - 1].bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Contato
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-white/80">
                      <Mail className="w-5 h-5 mr-2 text-white" />
                      <span>{trainers[selectedTrainer - 1].contact.email}</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Phone className="w-5 h-5 mr-2 text-white" />
                      <span>{trainers[selectedTrainer - 1].contact.phone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Redes Sociais
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={`https://instagram.com/${trainers[selectedTrainer - 1].social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href={`https://facebook.com/${trainers[selectedTrainer - 1].social.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href={`https://twitter.com/${trainers[selectedTrainer - 1].social.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Trainers; 