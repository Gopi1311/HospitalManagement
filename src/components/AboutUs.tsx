import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import News from "../home/News";
// import Contact from "../home/Contact";
// import Doctors from "../home/Doctors";
import News from "./home/News";
import Contact from "./home/Contact";
import Doctors from "./home/Doctors";

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white">
      {/* Breadcrumb and Title */}
      <section className="relative bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center py-20 md:py-32">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <div className="max-w-2xl text-white py-12">
            <p className="text-blue-900 font-semibold mb-2">Home / About</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
              About us
            </h1>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8">
        <div data-aos="fade-right" className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80"
            alt="Doctors"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div data-aos="fade-left" className="md:w-2/3">
          <div className="max-w-2xl">
            {" "}
            {/* Content container for baseline alignment */}
            <h2 className="text-sm text-blue-600 font-bold uppercase mb-2">
              Welcome to Hospital Name
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
              Best Care for Your Good Health
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-blue-900">
              <ul className="space-y-2 list-disc list-inside">
                <li>A Passion for Healing</li>
                <li>All our best</li>
                <li>Always Caring</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>5-Star Care</li>
                <li>Believe in Us</li>
                <li>A Legacy of Excellence</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare.
            </p>
            <p className="text-gray-700">
              Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div
        className="bg-blue-900 text-white py-16 px-4 sm:px-8 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto">
          {" "}
          {/* Centered container */}
          <p className="mb-6 italic text-base sm:text-lg">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque felis vitae tortor augue. Velit nascetur Consequat
            faucibus porttitor enim et."
          </p>
          <p className="font-semibold">John Doe</p>
          <div className="flex justify-center space-x-3 mt-4">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <Doctors />

      {/* News Section */}
      <News />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default AboutUs;
