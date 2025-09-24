
import React from 'react';
import Button from './common/Button';

interface HeaderProps {
  onNavigate: (view: any) => void;
  onRegisterClick: () => void;
  onDoctorClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onRegisterClick, onDoctorClick }) => {
  // A simple enum definition inside component for local use
  enum View { Home, Dashboard }

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(View.Home)}>
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
          <span className="text-2xl font-bold text-teal-800">PEHC Klyntar</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => onNavigate(View.Home)} className="text-slate-600 font-medium hover:text-teal-600 transition-colors">Home</button>
          <button onClick={() => onNavigate(View.Dashboard)} className="text-slate-600 font-medium hover:text-teal-600 transition-colors">Dashboard</button>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={onRegisterClick}>Register Worker</Button>
          <Button variant="primary" onClick={onDoctorClick}>Doctor Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
