import { IMAGES } from '../constants/images';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Clock, MapPin } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Equipamentos Modernos',
      description: 'Máquinas de última geração para todos os tipos de treino',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Instrutores Qualificados',
      description: 'Profissionais certificados para te ajudar a alcançar seus objetivos',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário Flexível',
      description: 'Aberto 24 horas para você treinar no seu melhor momento',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização Privilegiada',
      description: 'Fácil acesso e estacionamento gratuito',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={IMAGES.hero}
          alt="Academia Premium"
          className="h-full w-full object-cover"
        />
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-6xl font-display font-bold tracking-tight"
            >
              Transforme seu corpo,{' '}
              <span className="text-[#00BFFF]">
                transforme sua vida
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-xl text-white/90"
            >
              A melhor academia da cidade com os melhores instrutores e equipamentos
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/Plans
              "
                className="btn btn-primary btn-lg"
              >
                Vamos treinar juntos
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-4xl font-display font-bold tracking-tight"
        >
          Nossos Diferenciais
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-display font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workouts Preview */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-4xl font-display font-bold tracking-tight"
        >
          Nossos Treinos
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {['Força', 'Funcional', 'Cardio'].map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="workout-card"
            >
              <img
                src={IMAGES[`workout${index + 1}`]}
                alt={`Treino de ${type}`}
                className="h-full w-full object-cover"
              />
              <div className="workout-card-content">
                <h3 className="text-2xl font-display font-semibold">Treino de {type}</h3>
                <p className="text-sm text-white/90">
                  {type === 'Força' && 'Desenvolva sua força e massa muscular'}
                  {type === 'Funcional' && 'Melhore sua mobilidade e condicionamento'}
                  {type === 'Cardio' && 'Queime calorias e melhore seu condicionamento'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainers Preview */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-4xl font-display font-bold tracking-tight"
        >
          Nossos Instrutores
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {['João Silva', 'Maria Santos', 'Pedro Oliveira'].map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="trainer-card"
            >
              <img
                src={IMAGES[`trainer${index + 1}`]}
                alt={name}
                className="mb-4 h-48 w-full rounded-lg object-cover object-top"
              />
              <h3 className="text-2xl font-display font-semibold">{name}</h3>
              <p className="text-muted-foreground">
                {index === 0 && 'Especialista em Treino de Força'}
                {index === 1 && 'Especialista em Treino Funcional'}
                {index === 2 && 'Especialista em Treino Cardio'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 