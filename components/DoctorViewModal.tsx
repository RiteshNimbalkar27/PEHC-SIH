
import React, { useState, useCallback } from 'react';
import Modal from './common/Modal';
import Button from './common/Button';
import { generateHealthSummary } from '../services/geminiService';
import type { Patient } from '../types';

interface DoctorViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: Patient;
}

const DoctorViewModal: React.FC<DoctorViewModalProps> = ({ isOpen, onClose, patient }) => {
    const [scanned, setScanned] = useState(false);
    const [query, setQuery] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleScan = () => {
        // Simulate scanning QR
        setTimeout(() => setScanned(true), 500);
    };
    
    const handleGenerateSummary = useCallback(async () => {
        if (!query.trim()) {
            setSummary("Please enter a query to generate a summary.");
            return;
        }
        setIsLoading(true);
        setSummary('');
        try {
            const result = await generateHealthSummary(patient, query);
            setSummary(result);
        } catch (error) {
            setSummary("An error occurred while generating the summary.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [query, patient]);

    // Reset state when modal opens/closes
    React.useEffect(() => {
        if (!isOpen) {
            setScanned(false);
            setQuery('');
            setSummary('');
            setIsLoading(false);
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Doctor Portal: Patient Record">
            {!scanned ? (
                <div className="text-center p-8">
                    <h3 className="text-xl font-semibold mb-4">Ready to Access Patient Data</h3>
                    <p className="text-slate-600 mb-6">Please scan the patient's PEHC QR code to proceed.</p>
                    <Button onClick={handleScan} className="px-8 py-3 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h-1m-1-6v.01M5 12h-1m1-6V5m1-1H5a2 2 0 00-2 2v2m16 0V5a2 2 0 00-2-2h-2m-1 16v-1m-6 1h1m1-6v.01m-6 1h1m6-1v-1m-1-1v-1m0 0h-1m1 0h1m-1 0v-1m-1 1h.01M12 12h.01" /></svg>
                        Simulate Scan
                    </Button>
                </div>
            ) : (
                <div>
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Patient Name</p>
                            <p className="font-bold text-lg text-slate-800">{patient.name}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">THUID</p>
                            <p className="font-mono text-sm text-slate-600">{patient.thuid}</p>
                        </div>
                        <div className="flex justify-center items-center row-span-2">
                            <img src={patient.qrCodeUrl} alt="Patient QR Code" className="rounded-md" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Age / Gender</p>
                            <p className="font-bold text-slate-800">{patient.age} / {patient.gender}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Allergies</p>
                            <p className="font-bold text-red-600">{patient.allergies.join(', ') || 'None'}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-slate-700 mb-2">AI-Powered Summary (Gemini)</h4>
                        <div className="flex gap-2">
                           <input 
                             type="text" 
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             placeholder="e.g., 'Summarize recent fever consultations'" 
                             className="flex-grow p-2 border border-slate-300 rounded-md"
                             disabled={isLoading}
                           />
                           <Button onClick={handleGenerateSummary} disabled={isLoading}>
                               {isLoading ? 'Generating...' : 'Get Summary'}
                           </Button>
                        </div>
                        {summary && (
                            <div className="mt-4 p-4 bg-white rounded-md border text-slate-700 whitespace-pre-wrap">
                                {summary}
                            </div>
                        )}
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-slate-700 mb-2">Complete Health History</h4>
                        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                            {patient.healthRecords.map((record, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg border">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-teal-700">{record.type}</p>
                                        <p className="text-sm text-slate-500">{record.date}</p>
                                    </div>
                                    <p className="text-slate-600 mt-1">{record.summary}</p>
                                    <p className="text-xs text-slate-400 mt-2">By {record.doctor} at {record.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default DoctorViewModal;
