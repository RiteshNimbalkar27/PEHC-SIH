
import React from 'react';
import Card from './common/Card';

const workflowSteps = [
    { title: 'Phase 1: Onboarding', description: 'A Community Health Worker registers the migrant and generates a unique Temporary Health UID (THUID).' },
    { title: 'Phase 2: 3-Way Storage', description: 'The encrypted health record is stored on the worker\'s QR/phone, a local PHC node, and optionally linked to ABHA.' },
    { title: 'Phase 3: Access & Consent', description: 'Doctors scan the QR or access the local node. The worker grants consent via their device or verbally.' },
    { title: 'Phase 4: Update & Sync', description: 'New health data is appended to the record and synced across the storage nodes when connectivity is available.' },
    { title: 'Phase 5: Federated Analytics', description: 'Local AI models analyze anonymized data, contributing to a national disease surveillance dashboard.' },
];

const Workflow: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">How PEHC Works</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                        A seamless, offline-first workflow designed for reliability and ease of use in any environment.
                    </p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-teal-200 -translate-y-1/2"></div>
                    <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
                        {workflowSteps.map((step, index) => (
                            <div key={index} className="flex-1 text-center flex flex-col items-center w-full">
                                <div className="z-10 w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-2xl border-4 border-slate-50">{index + 1}</div>
                                <div className="mt-4 w-full">
                                    <h3 className="font-bold text-lg text-teal-800">{step.title}</h3>
                                    <p className="mt-2 text-sm text-slate-500">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
