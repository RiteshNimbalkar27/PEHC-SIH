
import React, { useState } from 'react';
import Modal from './common/Modal';
import Button from './common/Button';
import type { Patient } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (patient: Patient) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    bloodType: 'O+',
    allergies: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const thuid = `THUID-${Math.random().toString(16).substr(2, 4).toUpperCase()}-${Math.random().toString(16).substr(2, 4).toUpperCase()}-${Math.random().toString(16).substr(2, 4).toUpperCase()}`;
    const newPatient: Patient = {
      thuid,
      name: formData.name,
      age: parseInt(formData.age, 10),
      gender: formData.gender as 'Male' | 'Female' | 'Other',
      bloodType: formData.bloodType,
      allergies: formData.allergies.split(',').map(s => s.trim()).filter(Boolean),
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${thuid}`,
      healthRecords: [],
    };
    onRegister(newPatient);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register New Migrant Worker">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-md">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">Blood Type</label>
             <select name="bloodType" value={formData.bloodType} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-md">
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option>
                <option>O+</option><option>O-</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-600 mb-1">Known Allergies (comma-separated)</label>
            <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-md" placeholder="e.g., Penicillin, Peanuts" />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="submit">Generate THUID & Register</Button>
        </div>
      </form>
    </Modal>
  );
};

export default RegistrationModal;
