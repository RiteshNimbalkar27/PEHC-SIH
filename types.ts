
export interface HealthRecord {
  date: string;
  type: 'Consultation' | 'Vaccination' | 'Lab Report' | 'Prescription';
  summary: string;
  doctor: string;
  location: string;
}

export interface Patient {
  thuid: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bloodType: string;
  allergies: string[];
  qrCodeUrl: string;
  healthRecords: HealthRecord[];
}

export interface DiseaseStat {
    name: string;
    cases: number;
}
