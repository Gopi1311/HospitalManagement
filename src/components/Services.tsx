import React, { useState } from "react";
import Contact from "./home/Contact";
import { PiBandaidsFill } from "react-icons/pi";
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Free Checkup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Free Checkup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Free Checkup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Free Checkup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Free Checkup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Free Checkup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80',
  },
];
const Services: React.FC = () => {
  return (
 <>
      {/* Hero Section - Optimized */}
      <section className="relative w-full bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center py-20 md:py-32">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl text-white py-12">
            <p className="text-white font-semibold mb-2">Home / Services</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-800 rounded-full p-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <PiBandaidsFill size={24} color="white" className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium inline-flex items-center hover:underline mt-auto group-hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section with Proper Spacing */}
      <div className="mt-16">
        <Contact />
      </div>
    </>
  );
};

export default Services;