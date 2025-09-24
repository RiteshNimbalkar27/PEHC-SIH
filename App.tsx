
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Dashboard from './components/Dashboard';
import RegistrationModal from './components/RegistrationModal';
import DoctorViewModal from './components/DoctorViewModal';
import { MIGRANT_WORKER } from './constants';
import type { Patient } from './types';

enum View {
  Home,
  Dashboard,
}

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.Home);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const [isDoctorViewOpen, setDoctorViewOpen] = useState(false);
  const [registeredPatient, setRegisteredPatient] = useState<Patient | null>(MIGRANT_WORKER);

  const handleNavigate = useCallback((view: View) => {
    setActiveView(view);
  }, []);

  const handleRegisterPatient = useCallback((patient: Patient) => {
    setRegisteredPatient(patient);
    setRegistrationOpen(false);
    // In a real app, you'd show a success message
  }, []);


  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header 
        onNavigate={handleNavigate} 
        onRegisterClick={() => setRegistrationOpen(true)}
        onDoctorClick={() => setDoctorViewOpen(true)}
      />
      <main>
        {activeView === View.Home && (
          <>
            <Hero onDoctorClick={() => setDoctorViewOpen(true)} />
            <Features />
            <Workflow />
          </>
        )}
        {activeView === View.Dashboard && <Dashboard />}
      </main>
      
      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={() => setRegistrationOpen(false)}
        onRegister={handleRegisterPatient}
      />
      
      {registeredPatient && (
         <DoctorViewModal 
            isOpen={isDoctorViewOpen}
            onClose={() => setDoctorViewOpen(false)}
            patient={registeredPatient}
        />
      )}

      <footer className="text-center p-8 text-slate-500 border-t border-slate-200 mt-16">
        <p>&copy; 2025 Klyntar - PEHC Initiative. Smart India Hackathon 2025.</p>
      </footer>
    </div>
  );
};

export default App;
