
import React from 'react';
import Button from './common/Button';

interface HeroProps {
  onDoctorClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDoctorClick }) => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-900 leading-tight">
          Continuous, Private, and Equitable Healthcare For All
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
          Our Portable Encrypted Health Capsule (PEHC) ensures every migrant worker has secure, offline-first access to their medical history, making healthcare seamless and inclusive.
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <Button variant="primary" className="px-8 py-4 text-lg" onClick={onDoctorClick}>
            Access Patient Record
          </Button>
          <Button variant="ghost" className="px-8 py-4 text-lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
