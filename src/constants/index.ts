export const MUSCLE_GROUPS = [
  'Peitoral',
  'Costas',
  'Ombros',
  'Bíceps',
  'Tríceps',
  'Pernas',
  'Abdômen',
  'Glúteos',
] as const;

export const GOALS = [
  'Hipertrofia',
  'Força',
  'Resistência',
  'Definição',
  'Emagrecimento',
] as const;

export const DIFFICULTY_LEVELS = [
  'Iniciante',
  'Intermediário',
  'Avançado',
] as const;

export const WORKOUT_TYPES = [
  'Treino A',
  'Treino B',
  'Treino C',
  'Treino D',
] as const;

export const PLANS = [
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
    excluded: [
      'Aulas em grupo',
      'Personal Trainer',
      'Nutricionista',
      'Cadeira de massagem',
      'Acesso para amigos',
    ],
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
    excluded: [
      'Nutricionista',
      'Cadeira de massagem',
      'Acesso para amigos',
    ],
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
      'Cadeira de massagem',
      'Acesso para até 5 amigos/mês',
    ],
    popular: false,
  },
] as const;

export const TRAINERS = [
  {
    id: '1',
    name: 'Carlos Silva',
    role: 'Personal Trainer',
    specialties: ['Hipertrofia', 'Força', 'Crossfit'],
    experience: '8 anos',
    certifications: ['Cref 123456', 'Crossfit Level 2'],
    bio: 'Especialista em treinamento de força e hipertrofia, com experiência em atletas de alto rendimento.',
    socialMedia: {
      instagram: '@carlossilva',
      linkedin: 'carlossilva',
    },
  },
  {
    id: '2',
    name: 'Ana Santos',
    role: 'Personal Trainer',
    specialties: ['Emagrecimento', 'Funcional', 'Pilates'],
    experience: '5 anos',
    certifications: ['Cref 789012', 'Pilates Instructor'],
    bio: 'Especialista em emagrecimento e treinamento funcional, com foco em qualidade de vida e bem-estar.',
    socialMedia: {
      instagram: '@anasantos',
      linkedin: 'anasantos',
    },
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    role: 'Personal Trainer',
    specialties: ['Resistência', 'Corrida', 'Triathlon'],
    experience: '10 anos',
    certifications: ['Cref 345678', 'Triathlon Coach'],
    bio: 'Especialista em treinamento de resistência e preparação para provas de longa distância.',
    socialMedia: {
      instagram: '@pedrooliveira',
      linkedin: 'pedrooliveira',
    },
  },
] as const; 