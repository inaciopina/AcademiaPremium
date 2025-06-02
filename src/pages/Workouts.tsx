import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Target, Filter, Clock } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Workouts = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('all');
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);

  const muscleGroups = [
    { id: 'all', name: 'Todos' },
    { id: 'chest', name: 'Peito' },
    { id: 'back', name: 'Costas' },
    { id: 'legs', name: 'Pernas' },
    { id: 'shoulders', name: 'Ombros' },
    { id: 'arms', name: 'Braços' },
    { id: 'core', name: 'Core' },
  ];

  const goals = [
    { id: 'all', name: 'Todos' },
    { id: 'hypertrophy', name: 'Hipertrofia' },
    { id: 'strength', name: 'Força' },
    { id: 'endurance', name: 'Resistência' },
    { id: 'weight-loss', name: 'Emagrecimento' },
  ];

  const levels = ['Iniciante', 'Intermediário', 'Avançado'];

  const workouts = [
    // Treinos de Peito
    {
      id: 1,
      name: 'Treino de Peito Avançado',
      muscleGroup: 'chest',
      goal: 'hypertrophy',
      level: 'Avançado',
      duration: '60 min',
      difficulty: 'Avançado',
      exercises: [
        { name: 'Supino Reto', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Supino Inclinado', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Supino Declinado', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Crucifixo com Halteres', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Pullover', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Flexão de Braço', sets: 3, reps: 'Até falha', rest: '60s' }
      ],
      description: 'Treino focado em hipertrofia do peitoral, com ênfase em exercícios compostos e isolados.'
    },
    {
      id: 2,
      name: 'Treino de Peito Iniciante',
      muscleGroup: 'chest',
      goal: 'strength',
      level: 'Iniciante',
      duration: '45 min',
      difficulty: 'Iniciante',
      exercises: [
        { name: 'Supino Reto', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Supino Inclinado', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Crucifixo com Halteres', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Flexão de Braço', sets: 3, reps: '10-12', rest: '60s' }
      ],
      description: 'Treino básico para desenvolvimento do peitoral, ideal para iniciantes.'
    },
    {
      id: 3,
      name: 'Treino de Peito Intermediário',
      muscleGroup: 'chest',
      goal: 'endurance',
      level: 'Intermediário',
      duration: '50 min',
      difficulty: 'Intermediário',
      exercises: [
        { name: 'Supino Reto', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Supino Inclinado', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Crucifixo com Halteres', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Pullover', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Flexão de Braço', sets: 3, reps: '15-20', rest: '45s' }
      ],
      description: 'Treino de resistência para o peitoral, focado em volume e endurance.'
    },
    // Treinos de Costas
    {
      id: 4,
      name: 'Treino de Costas Avançado',
      muscleGroup: 'back',
      goal: 'hypertrophy',
      level: 'Avançado',
      duration: '65 min',
      difficulty: 'Avançado',
      exercises: [
        { name: 'Puxada Frontal', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Remada Curvada', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Remada Baixa', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Puxada na Frente', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Remada Unilateral', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Pull-down', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino intenso para desenvolvimento completo das costas.'
    },
    {
      id: 5,
      name: 'Treino de Costas Iniciante',
      muscleGroup: 'back',
      goal: 'strength',
      level: 'Iniciante',
      duration: '45 min',
      difficulty: 'Iniciante',
      exercises: [
        { name: 'Puxada Frontal', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Remada Curvada', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Remada Baixa', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Puxada na Frente', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino básico para desenvolvimento das costas, ideal para iniciantes.'
    },
    {
      id: 6,
      name: 'Treino de Costas Intermediário',
      muscleGroup: 'back',
      goal: 'endurance',
      level: 'Intermediário',
      duration: '55 min',
      difficulty: 'Intermediário',
      exercises: [
        { name: 'Puxada Frontal', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Remada Curvada', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Remada Baixa', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Puxada na Frente', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Remada Unilateral', sets: 3, reps: '15-20', rest: '45s' }
      ],
      description: 'Treino de resistência para as costas, focado em volume e endurance.'
    },
    // Treinos de Pernas
    {
      id: 7,
      name: 'Treino de Pernas Avançado',
      muscleGroup: 'legs',
      goal: 'hypertrophy',
      level: 'Avançado',
      duration: '80 min',
      difficulty: 'Avançado',
      exercises: [
        { name: 'Agachamento Livre', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Leg Press', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Extensão de Pernas', sets: 4, reps: '10-12', rest: '60s' },
        { name: 'Flexão de Pernas', sets: 4, reps: '10-12', rest: '60s' },
        { name: 'Afundo', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Elevação Pélvica', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino intenso para desenvolvimento completo das pernas.'
    },
    {
      id: 8,
      name: 'Treino de Pernas Iniciante',
      muscleGroup: 'legs',
      goal: 'strength',
      level: 'Iniciante',
      duration: '50 min',
      difficulty: 'Iniciante',
      exercises: [
        { name: 'Agachamento no Smith', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Leg Press', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Extensão de Pernas', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Flexão de Pernas', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino básico para desenvolvimento das pernas, ideal para iniciantes.'
    },
    {
      id: 9,
      name: 'Treino de Pernas Intermediário',
      muscleGroup: 'legs',
      goal: 'endurance',
      level: 'Intermediário',
      duration: '60 min',
      difficulty: 'Intermediário',
      exercises: [
        { name: 'Agachamento Livre', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Leg Press', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Extensão de Pernas', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Flexão de Pernas', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Afundo', sets: 3, reps: '15-20', rest: '45s' }
      ],
      description: 'Treino de resistência para as pernas, focado em volume e endurance.'
    },
    // Treinos de Ombros
    {
      id: 10,
      name: 'Treino de Ombros Avançado',
      muscleGroup: 'shoulders',
      goal: 'hypertrophy',
      level: 'Avançado',
      duration: '55 min',
      difficulty: 'Avançado',
      exercises: [
        { name: 'Desenvolvimento com Halteres', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Elevação Lateral', sets: 4, reps: '10-12', rest: '60s' },
        { name: 'Elevação Frontal', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Remada Alta', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Rotação Externa', sets: 3, reps: '12-15', rest: '45s' }
      ],
      description: 'Treino completo para desenvolvimento dos ombros.'
    },
    {
      id: 11,
      name: 'Treino de Ombros Iniciante',
      muscleGroup: 'shoulders',
      goal: 'strength',
      level: 'Iniciante',
      duration: '40 min',
      difficulty: 'Iniciante',
      exercises: [
        { name: 'Desenvolvimento no Smith', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Elevação Lateral', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Elevação Frontal', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino básico para desenvolvimento dos ombros, ideal para iniciantes.'
    },
    {
      id: 12,
      name: 'Treino de Ombros Intermediário',
      muscleGroup: 'shoulders',
      goal: 'endurance',
      level: 'Intermediário',
      duration: '45 min',
      difficulty: 'Intermediário',
      exercises: [
        { name: 'Desenvolvimento com Halteres', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Elevação Lateral', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Elevação Frontal', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Remada Alta', sets: 3, reps: '15-20', rest: '45s' }
      ],
      description: 'Treino de resistência para os ombros, focado em volume e endurance.'
    },
    // Treinos de Braços
    {
      id: 13,
      name: 'Treino de Braços Avançado',
      muscleGroup: 'arms',
      goal: 'hypertrophy',
      level: 'Avançado',
      duration: '60 min',
      difficulty: 'Avançado',
      exercises: [
        { name: 'Rosca Direta', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Tríceps Pulley', sets: 4, reps: '8-10', rest: '90s' },
        { name: 'Rosca Martelo', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Tríceps Francês', sets: 3, reps: '10-12', rest: '60s' },
        { name: 'Rosca Concentrada', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Tríceps Coice', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino intenso para desenvolvimento completo dos braços.'
    },
    {
      id: 14,
      name: 'Treino de Braços Iniciante',
      muscleGroup: 'arms',
      goal: 'strength',
      level: 'Iniciante',
      duration: '45 min',
      difficulty: 'Iniciante',
      exercises: [
        { name: 'Rosca Direta', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Tríceps Pulley', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Rosca Martelo', sets: 3, reps: '12-15', rest: '60s' },
        { name: 'Tríceps Francês', sets: 3, reps: '12-15', rest: '60s' }
      ],
      description: 'Treino básico para desenvolvimento dos braços, ideal para iniciantes.'
    },
    {
      id: 15,
      name: 'Treino de Braços Intermediário',
      muscleGroup: 'arms',
      goal: 'endurance',
      level: 'Intermediário',
      duration: '50 min',
      difficulty: 'Intermediário',
      exercises: [
        { name: 'Rosca Direta', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Tríceps Pulley', sets: 4, reps: '12-15', rest: '60s' },
        { name: 'Rosca Martelo', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Tríceps Francês', sets: 3, reps: '15-20', rest: '45s' },
        { name: 'Rosca Concentrada', sets: 3, reps: '15-20', rest: '45s' }
      ],
      description: 'Treino de resistência para os braços, focado em volume e endurance.'
    },
    // Treinos de Core
    {
      id: 16,
      name: 'Treino de Core Avançado',
      muscleGroup: 'core',
      goal: 'hypertrophy',
      level: 'Avançado',
      duration: '45 min',
      difficulty: 'Avançado',
      exercises: [
        { name: 'Prancha', sets: 3, reps: '45-60s', rest: '30s' },
        { name: 'Abdominal Crunch', sets: 4, reps: '15-20', rest: '30s' },
        { name: 'Prancha Lateral', sets: 3, reps: '45-60s', rest: '30s' },
        { name: 'Russian Twist', sets: 3, reps: '15-20', rest: '30s' },
        { name: 'Elevação de Pernas', sets: 3, reps: '12-15', rest: '30s' },
        { name: 'Abdominal Bicicleta', sets: 3, reps: '20-25', rest: '30s' }
      ],
      description: 'Treino intenso para fortalecimento completo do core.'
    },
    {
      id: 17,
      name: 'Treino de Core Iniciante',
      muscleGroup: 'core',
      goal: 'strength',
      level: 'Iniciante',
      duration: '30 min',
      difficulty: 'Iniciante',
      exercises: [
        { name: 'Prancha', sets: 3, reps: '20-30s', rest: '30s' },
        { name: 'Abdominal Crunch', sets: 3, reps: '12-15', rest: '30s' },
        { name: 'Prancha Lateral', sets: 3, reps: '20-30s', rest: '30s' },
        { name: 'Russian Twist', sets: 3, reps: '12-15', rest: '30s' }
      ],
      description: 'Treino básico para fortalecimento do core, ideal para iniciantes.'
    },
    {
      id: 18,
      name: 'Treino de Core Intermediário',
      muscleGroup: 'core',
      goal: 'endurance',
      level: 'Intermediário',
      duration: '40 min',
      difficulty: 'Intermediário',
      exercises: [
        { name: 'Prancha', sets: 3, reps: '30-45s', rest: '30s' },
        { name: 'Abdominal Crunch', sets: 3, reps: '15-20', rest: '30s' },
        { name: 'Prancha Lateral', sets: 3, reps: '30-45s', rest: '30s' },
        { name: 'Russian Twist', sets: 3, reps: '15-20', rest: '30s' },
        { name: 'Elevação de Pernas', sets: 3, reps: '12-15', rest: '30s' }
      ],
      description: 'Treino de resistência para o core, focado em volume e endurance.'
    }
  ];

  const filteredWorkouts = workouts
    .filter(
    (workout) =>
      (selectedMuscle === 'all' || workout.muscleGroup === selectedMuscle) &&
        (selectedGoal === 'all' || workout.goal === selectedGoal) &&
        (!selectedLevel || workout.level === selectedLevel)
    )
    .slice(0, selectedMuscle === 'all' ? 4 : undefined);

  const handleMuscleClick = (muscleId) => {
    setSelectedMuscle(muscleId);
    setSelectedLevel(null);
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
  };

  const handleViewDetails = (workout) => {
    setSelectedWorkout(workout.id);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={IMAGES.workout1}
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
          Treinos Personalizados
        </h1>
          <p className="text-xl text-white/80">
            Escolha o treino ideal para seus objetivos
        </p>
      </motion.div>

        {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
            <label className="block text-sm font-medium text-white mb-2">
            Grupo Muscular
          </label>
          <div className="flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
                <motion.button
                key={muscle.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMuscleClick(muscle.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedMuscle === muscle.id
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Dumbbell className="inline-block w-4 h-4 mr-2" />
                {muscle.name}
                </motion.button>
            ))}
          </div>
        </div>

        <div className="flex-1">
            <label className="block text-sm font-medium text-white mb-2">
            Objetivo
          </label>
          <div className="flex flex-wrap gap-2">
            {goals.map((goal) => (
                <motion.button
                key={goal.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedGoal(goal.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedGoal === goal.id
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Target className="inline-block w-4 h-4 mr-2" />
                {goal.name}
                </motion.button>
            ))}
            </div>
          </div>

          {selectedMuscle !== 'all' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-white mb-2">
                Nível de Treino
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <motion.button
                    key={level}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLevelClick(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedLevel === level
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {level}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
      </div>

        {/* Grid de Treinos */}
      <div className="grid gap-6 md:grid-cols-3">
        {filteredWorkouts.map((workout) => (
          <motion.div
            key={workout.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 cursor-pointer ${
                selectedWorkout === workout.id ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => handleViewDetails(workout)}
          >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                {workout.name}
              </h3>
                <p className="text-white/80">{workout.muscleGroup}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Objetivo
                  </h4>
                  <p className="text-white/80">{workout.goal}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Nível
                  </h4>
                  <p className="text-white/80">{workout.level}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Duração
                  </h4>
                  <p className="text-white/80">{workout.duration}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">
                    Dificuldade
                  </h4>
                  <div className="flex space-x-1">
                    {[...Array(workout.difficulty)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
          </motion.div>
        ))}
      </div>

      {filteredWorkouts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
            <Filter className="w-12 h-12 text-white/60 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">
            Nenhum treino encontrado
          </h3>
            <p className="text-white/80">
            Tente ajustar os filtros para encontrar o treino ideal
          </p>
          </motion.div>
        )}
      </div>

      {/* Popup de Detalhes */}
      {showPopup && selectedWorkout !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closePopup}
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
                  {workouts[selectedWorkout - 1].name}
                </h2>
                <p className="text-white/80">
                  {workouts[selectedWorkout - 1].description}
                </p>
              </div>
              <button
                onClick={closePopup}
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
                  Detalhes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-white mb-1">
                      Grupo Muscular
                    </h4>
                    <p className="text-white/80">
                      {workouts[selectedWorkout - 1].muscleGroup}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-white mb-1">
                      Objetivo
                    </h4>
                    <p className="text-white/80">
                      {workouts[selectedWorkout - 1].goal}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-white mb-1">
                      Nível
                    </h4>
                    <p className="text-white/80">
                      {workouts[selectedWorkout - 1].level}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-white mb-1">
                      Duração
                    </h4>
                    <p className="text-white/80">
                      {workouts[selectedWorkout - 1].duration}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Exercícios
                </h3>
                <div className="space-y-4">
                  {workouts[selectedWorkout - 1].exercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg p-4"
                    >
                      <h4 className="text-lg font-medium text-white mb-2">
                        {exercise.name}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-white/60 mb-1">
                            Séries
                          </p>
                          <p className="text-white">
                            {exercise.sets}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">
                            Repetições
                          </p>
                          <p className="text-white">
                            {exercise.reps}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">
                            Descanso
                          </p>
                          <p className="text-white">
                            {exercise.rest}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={closePopup}
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
  );
};

export default Workouts; 