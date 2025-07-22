
import React, { useState } from 'react';
import { PiBandaidsFill, PiHeartbeatBold } from "react-icons/pi";
import { GiMedicalPackAlt } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";

const servicesData = [
  {
    key: 'Free Checkup',
    label: 'Free Checkup',
    title: 'A passion for putting patients first.',
    pointsLeft: [
      'A Passion for Healing',
      'All our best',
      'A Legacy of Excellence',
    ],
    pointsRight: [
      '5-Star Care',
      'Believe in Us',
      'Always Caring',
    ],
    logo:<PiBandaidsFill size={30}/>,
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in.',
    ],
    images: [
      'https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    key: 'Cardiogram',
    label: 'Cardiogram',
    title: 'Cardiogram service details.',
    logo:<PiHeartbeatBold  size={30}/>,
    pointsLeft: [
      'Heart Health',
      'Advanced Diagnostics',
      'Personalized Care',
    ],
    pointsRight: [
      '24/7 Monitoring',
      'Expert Cardiologists',
      'Latest Technology',
    ],
    paragraphs: [
      'Cardiogram service description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional cardiogram details and patient care information.',
    ],
    images: [
      'https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    key: 'Dna Testing',
    label: 'Dna Testing',
    title: 'DNA Testing service details.',
    logo:<GiMedicalPackAlt size={30} />,
    pointsLeft: [
      'Accurate Results',
      'Confidential Reports',
      'Expert Analysis',
    ],
    pointsRight: [
      'Fast Turnaround',
      'Certified Labs',
      'Comprehensive Testing',
    ],
    paragraphs: [
      'DNA testing service description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional DNA testing details and patient care information.',
    ],
    images: [
      'https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    key: 'Blood Bank',
    label: 'Blood Bank',
    title: 'Blood Bank service details.',
    logo:<MdBloodtype size={30}/>,
    pointsLeft: [
      'Safe Donations',
      '24/7 Availability',
      'Community Support',
    ],
    pointsRight: [
      'Screened Blood',
      'Emergency Services',
      'Voluntary Donors',
    ],
    paragraphs: [
      'Blood bank service description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional blood bank details and patient care information.',
    ],
    images: [
      'https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
    ],
  },
];
export default function Services() {
  const [selected, setSelected] = useState('Free Checkup');
  const service = servicesData.find(s => s.key === selected) || servicesData[0];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
            Care You Can Believe In
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Services</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Sidebar - Adjusted height */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 lg:gap-2 lg:w-1/4 bg-white rounded-lg shadow-md">
            {servicesData.map(({ key, label, logo }) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`flex flex-col items-center justify-center min-w-[140px] lg:min-w-full p-4 aspect-square lg:aspect-auto lg:p-5 text-center transition-colors ${
                  selected === key 
                    ? 'bg-blue-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="mb-2 text-2xl">{logo}</div>
                <span className="text-base sm:text-lg font-medium">{label}</span>
              </button>
            ))}
            <button className="px-4 py-3 lg:py-4 bg-blue-900 text-white font-medium text-sm sm:text-base hover:bg-blue-800 transition-colors">
              View All
            </button>
          </div>

          {/* Content Area - Matching height */}
          <div className="lg:w-3/4 bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="md:w-1/2">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
              <div className="flex justify-between mb-3 sm:mb-4 gap-4">
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  {service.pointsLeft.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  {service.pointsRight.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              {service.paragraphs.map((para, i) => (
                <p key={i} className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  {para}
                </p>
              ))}
            </div>

            {/* Images - Reduced size to match sidebar */}
            <div className="md:w-1/2 flex flex-col gap-3 sm:gap-4">
              {service.images.map((src, i) => (
                <div key={i} className="h-[200px] sm:h-[220px] overflow-hidden">
                  <img 
                    src={src} 
                    alt={`${selected} image ${i + 1}`} 
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}