import React, { useState } from 'react';
import { LiaHeartbeatSolid } from "react-icons/lia";

const specialties = [
  'Neurology',
  'Bones',
  'Oncology',
  'Otorhinolaryngology',
  'Ophthalmology',
  'Cardiovascular',
  'Pulmonology',
  'Renal Medicine',
  'Gastroenterology',
  'Urology',
  'Dermatology',
  'Gynaecology',
];

export default function Appointment() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Bones');

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Specialties */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
            Always Caring
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold">Our Specialties</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 md:mb-20">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`flex flex-col items-center justify-center p-4 sm:p-6 border rounded-lg cursor-pointer transition-all duration-300 ${
                selectedSpecialty === spec
                  ? 'bg-blue-900 text-white border-blue-900 shadow-lg transform -translate-y-1'
                  : 'bg-white text-blue-600 border-gray-200 hover:bg-blue-50 hover:shadow-md'
              }`}
            >
              <LiaHeartbeatSolid className="text-4xl sm:text-5xl mb-3" />
              <span className="text-xs sm:text-sm font-medium text-center">{spec}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}