import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={IMAGES.gym1}
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
            Nossos Planos
          </h1>
          <p className="text-xl text-white/80">
            Escolha o plano ideal para seus objetivos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 ${
                selectedPlan === plan.id ? 'ring-2 ring-white' : ''
              } ${plan.popular ? 'border-primary' : ''}`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-lg text-white/80">{plan.period}</span>
                </div>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                    Mais Popular
                  </span>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Inclui
                  </h4>
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-white/80">
                        <Check className="w-4 h-4 mr-2 text-white" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Não Inclui
                  </h4>
                  <div className="space-y-2">
                    {plan.excluded?.map((exclusion, index) => (
                      <div key={index} className="flex items-center text-white/60">
                        <X className="w-4 h-4 mr-2 text-red-500" />
                        <span>{exclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Assinar Plano
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedPlan !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedPlan(null)}
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
                    {PLANS.find(p => p.id === selectedPlan)?.name}
                  </h2>
                  <p className="text-white/80">
                    {PLANS.find(p => p.id === selectedPlan)?.price}
                    {PLANS.find(p => p.id === selectedPlan)?.period}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
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
                    Benefícios
                  </h3>
                  <div className="space-y-2">
                    {PLANS.find(p => p.id === selectedPlan)?.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-white/80">
                        <Check className="w-5 h-5 mr-2 text-white" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Restrições
                  </h3>
                  <div className="space-y-2">
                    {PLANS.find(p => p.id === selectedPlan)?.excluded?.map((exclusion, index) => (
                      <div key={index} className="flex items-center text-white/60">
                        <X className="w-5 h-5 mr-2 text-red-500" />
                        <span>{exclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Plans; 