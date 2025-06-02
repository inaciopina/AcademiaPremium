import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 'R$ 99,90',
      period: '/mês',
      features: [
        'Acesso à academia',
        'Avaliação física',
        'Treino básico',
        'Acesso ao app',
        'Wi-Fi',
      ],
      excluded: ['Aulas em grupo', 'Personal Trainer', 'Nutricionista'],
      popular: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'R$ 149,90',
      period: '/mês',
      features: [
        'Acesso à academia',
        'Avaliação física',
        'Treino personalizado',
        'Acesso ao app',
        'Wi-Fi',
        'Aulas em grupo',
        'Personal Trainer 1x/semana',
      ],
      excluded: ['Nutricionista'],
      popular: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 'R$ 199,90',
      period: '/mês',
      features: [
        'Acesso à academia',
        'Avaliação física',
        'Treino personalizado',
        'Acesso ao app',
        'Wi-Fi',
        'Aulas em grupo',
        'Personal Trainer 2x/semana',
        'Nutricionista 1x/mês',
      ],
      excluded: [],
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Escolha seu Plano
        </h1>
        <p className="text-xl text-muted-foreground">
          Planos flexíveis para todos os objetivos
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ y: -10 }}
            className={`relative bg-card rounded-2xl p-6 shadow-lg ${
              plan.popular ? 'ring-2 ring-neon-purple' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-neon-purple text-white text-sm font-medium">
                  Mais Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold text-foreground">
                Incluído no plano:
              </h4>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 text-neon-purple mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {plan.excluded.length > 0 && (
              <div className="space-y-2 mb-6">
                <h4 className="text-lg font-semibold text-foreground">
                  Não incluído:
                </h4>
                <ul className="space-y-2">
                  {plan.excluded.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <X className="w-5 h-5 text-destructive mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? 'bg-neon-purple text-white hover:bg-neon-purple/90'
                  : 'bg-accent text-foreground hover:bg-accent/80'
              }`}
            >
              Assinar Agora
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Dúvidas sobre os planos?
        </h2>
        <p className="text-muted-foreground mb-6">
          Entre em contato conosco para mais informações
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-accent text-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors"
        >
          Fale Conosco
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Subscription; 