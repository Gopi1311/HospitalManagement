import React, { useState } from "react";
import News from "./home/News";
import Contact from "./home/Contact";
import Doctor from "./home/Doctors";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur.",
    author: "John Doe",
  },
  {
    id: 2,
    quote:
      "Another testimonial quote goes here. This is a sample testimonial for the doctors section.",
    author: "Jane Smith",
  },
  {
    id: 3,
    quote:
      "More testimonials can be added here to cycle through in the slider.",
    author: "Alice Johnson",
  },
];
const Doctors: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center py-20 md:py-32">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl text-white py-12">
            <p className="text-white font-semibold mb-2">Home / Doctors</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Our Doctors
            </h1>
          </div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <Doctor />

      {/* Testimonial Section - Full Width */}
      <div className="w-full bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 italic text-base sm:text-lg">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="font-semibold">
              - {testimonials[currentTestimonial].author}
            </p>
            <div className="flex justify-center space-x-3 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentTestimonial
                      ? "bg-white"
                      : "bg-white opacity-50"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-16">
        <News />
      </div>

      {/* Contact Section */}
      <div className="pb-16">
        <Contact />
      </div>
    </div>
  );
};

export default Doctors;
