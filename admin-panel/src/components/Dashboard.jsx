import React from 'react'

import { motion } from 'framer-motion';
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Dashboard = () => {
  const owner = {
    name: "Sanjay Baviskar",
    role: "Project Owner",
    email: "sanjay@example.com",
    phone: "+91 9876543210",
    location: "Pune, India",
    projects: 5,
    employees: 12,
  };

  return (
    <div className="p-6">
       
      <motion.div className="bg-white drop-shadow-xl drop-shadow-gray-700  rounded-2xl  p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{owner.name}</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <Briefcase size={18} /> {owner.role}
            </p>

            <div className="mt-4 space-y-2 text-gray-700">
              <p className="flex items-center gap-2"><Mail size={16}/> {owner.email}</p>
              <p className="flex items-center gap-2"><Phone size={16}/> {owner.phone}</p>
              <p className="flex items-center gap-2"><MapPin size={16}/> {owner.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl text-center p-4 shadow">
              <h3 className="text-xl font-bold">{owner.projects}</h3>
              <p className="text-gray-600">Projects</p>
            </div>
            <div className="bg-gray-50 rounded-xl text-center p-4 shadow">
              <h3 className="text-xl font-bold">{owner.employees}</h3>
              <p className="text-gray-600">Employees</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard