import { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, Save, LogOut, Settings, History, User } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    birthDate: '01/01/1990',
    height: '1.75m',
    weight: '75kg',
    goal: 'Hipertrofia',
    plan: 'Premium',
  });

  const [workoutHistory] = useState([
    {
      id: 1,
      date: '15/03/2024',
      type: 'Treino A',
      duration: '1h 30min',
      exercises: 8,
    },
    {
      id: 2,
      date: '13/03/2024',
      type: 'Treino B',
      duration: '1h 15min',
      exercises: 7,
    },
    {
      id: 3,
      date: '11/03/2024',
      type: 'Treino A',
      duration: '1h 20min',
      exercises: 8,
    },
  ]);

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você implementaria a lógica para salvar as alterações
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Meu Perfil</h1>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 rounded-lg bg-accent text-foreground hover:bg-accent/80 transition-colors"
            >
              {isEditing ? <Save size={24} /> : <Edit size={24} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-destructive text-white hover:bg-destructive/90 transition-colors"
            >
              <LogOut size={24} />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Informações Pessoais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Data de Nascimento
                  </label>
                  <input
                    type="text"
                    value={userData.birthDate}
                    onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Medidas e Objetivos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Altura
                  </label>
                  <input
                    type="text"
                    value={userData.height}
                    onChange={(e) => setUserData({ ...userData, height: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Peso
                  </label>
                  <input
                    type="text"
                    value={userData.weight}
                    onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Objetivo
                  </label>
                  <input
                    type="text"
                    value={userData.goal}
                    onChange={(e) => setUserData({ ...userData, goal: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-input text-foreground disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Plano Atual
              </h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Plano</span>
                <span className="font-medium text-foreground">{userData.plan}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 px-4 rounded-lg bg-neon-purple text-white font-medium hover:bg-neon-purple/90 transition-colors"
              >
                Alterar Plano
              </motion.button>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Histórico de Treinos
              </h2>
              <div className="space-y-4">
                {workoutHistory.map((workout) => (
                  <div
                    key={workout.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-background"
                  >
                    <div>
                      <p className="font-medium text-foreground">{workout.type}</p>
                      <p className="text-sm text-muted-foreground">{workout.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{workout.duration}</p>
                      <p className="text-sm text-muted-foreground">
                        {workout.exercises} exercícios
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile; 