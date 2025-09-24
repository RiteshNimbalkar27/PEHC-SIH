
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DASHBOARD_STATS, DISEASE_DATA } from '../constants';
import Card from './common/Card';

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Public Health Surveillance Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {DASHBOARD_STATS.map((stat, index) => (
                    <Card key={index}>
                        <h3 className="text-slate-500 font-medium">{stat.title}</h3>
                        <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                        <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                    </Card>
                ))}
            </div>

            <Card className="h-[500px] w-full">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Reported Cases (Last 30 Days)</h2>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                        data={DISEASE_DATA}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="cases" fill="#14b8a6" name="Number of Cases" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </div>
    );
};

export default Dashboard;
