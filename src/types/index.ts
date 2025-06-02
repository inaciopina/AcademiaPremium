export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  height: string;
  weight: string;
  goal: string;
  plan: string;
}

export interface Workout {
  id: string;
  name: string;
  type: string;
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  exercises: number;
  muscleGroups: string[];
  goals: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  certifications: string[];
  bio: string;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  excluded: string[];
  popular: boolean;
}

export interface WorkoutHistory {
  id: string;
  date: string;
  type: string;
  duration: string;
  exercises: number;
}

export type Theme = 'light' | 'dark';

export type ToastType = 'success' | 'error' | 'info'; 