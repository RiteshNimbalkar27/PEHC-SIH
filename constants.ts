
import type { Patient, DiseaseStat } from './types';

export const MIGRANT_WORKER: Patient = {
  thuid: 'THUID-89C4-F76E-A21B',
  name: 'Ramesh Kumar',
  age: 34,
  gender: 'Male',
  bloodType: 'O+',
  allergies: ['Penicillin', 'Dust Mites'],
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=THUID-89C4-F76E-A21B',
  healthRecords: [
    {
      date: '2024-07-15',
      type: 'Consultation',
      summary: 'Patient reported high fever and body aches. Diagnosed with viral infection.',
      doctor: 'Dr. Anjali Sharma',
      location: 'PHC Ernakulam',
    },
    {
      date: '2024-07-15',
      type: 'Prescription',
      summary: 'Paracetamol 500mg (1 tablet thrice a day for 3 days).',
      doctor: 'Dr. Anjali Sharma',
      location: 'PHC Ernakulam',
    },
    {
      date: '2024-05-20',
      type: 'Vaccination',
      summary: 'Tetanus Toxoid (TT) booster dose administered.',
      doctor: 'Nurse Priya Menon',
      location: 'Govt. Hospital, Thrissur',
    },
    {
      date: '2023-11-02',
      type: 'Lab Report',
      summary: 'Complete Blood Count (CBC) - All parameters within normal range.',
      doctor: 'Lab Technician',
      location: 'District Lab, Kollam',
    },
  ],
};

export const DASHBOARD_STATS: { title: string; value: string; change: string; }[] = [
    { title: "Total Registrations", value: "1,25,834", change: "+12% this month" },
    { title: "Health Records Accessed", value: "4,78,102", change: "+8% this week" },
    { title: "Active PHCs", value: "1,450", change: "+5 new locations" },
    { title: "Alerts Triggered", value: "73", change: "-5% this month" }
];

export const DISEASE_DATA: DiseaseStat[] = [
    { name: 'Viral Fever', cases: 450 },
    { name: 'Dengue', cases: 120 },
    { name: 'Typhoid', cases: 85 },
    { name: 'Malaria', cases: 42 },
    { name: 'COVID-19', cases: 15 },
    { name: 'Other', cases: 210 },
];
