import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    },
    {
      name: "Dr. Emily Brown",
      specialty: "Pediatrician",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-widest text-center mb-2">
          TRUSTED CARE
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 md:mb-16">
          Our Doctors
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doctor, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 mx-auto w-full max-w-xs sm:max-w-none"
            >
              {/* Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-72 sm:h-80 object-cover"
              />

              {/* Content */}
              <div className="flex-1 px-4 pb-4 pt-6 bg-blue-50 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-900 mb-4 tracking-wider uppercase font-bold text-sm text-center">
                    {doctor.specialty}
                  </p>
                </div>

                <div className="flex justify-center space-x-4 mt-auto">
                  <Facebook className="w-6 h-6 text-blue-900 hover:text-blue-700 cursor-pointer transition-colors" />
                  <Twitter className="w-6 h-6 text-blue-900 hover:text-blue-500 cursor-pointer transition-colors" />
                  <Instagram className="w-6 h-6 text-blue-900 hover:text-pink-600 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Button */}
              <div className="w-full bg-blue-900 py-3 text-white text-center hover:bg-blue-800 transition-colors">
                <button className="text-sm font-medium">View Profile</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-2 text-sm font-medium text-blue-900">
          <button className="px-4 py-2 rounded hover:bg-blue-100 transition-colors">
            1
          </button>
          <button className="px-4 py-2 rounded bg-blue-900 text-white">
            2
          </button>
          <button className="px-4 py-2 rounded hover:bg-blue-100 transition-colors">
            3
          </button>
          <span className="px-2">...</span>
          <button className="px-4 py-2 rounded hover:bg-blue-100 transition-colors">
            7
          </button>
        </div>
      </div>
    </section>
  );
}