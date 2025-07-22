import { Calendar, Clock, Phone } from 'lucide-react';

export default function InfoCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-900 p-6 lg:p-8 rounded-lg text-white transform hover:-translate-y-1 transition duration-300">
          <Calendar className="w-8 h-8 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Book an Appointment</h3>
          <p className="text-blue-100 text-sm md:text-base">Schedule your visit with our expert doctors</p>
        </div>
        <div className="bg-blue-800 p-6 lg:p-8 rounded-lg text-white transform hover:-translate-y-1 transition duration-300">
          <Clock className="w-8 h-8 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Working Hours</h3>
          <p className="text-blue-100 text-sm md:text-base">Mon-Fri: 9AM-5PM<br />Sat: 9AM-1PM</p>
        </div>
        <div className="bg-blue-700 p-6 lg:p-8 rounded-lg text-white transform hover:-translate-y-1 transition duration-300">
          <Phone className="w-8 h-8 mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Emergency Cases</h3>
          <p className="text-blue-100 text-sm md:text-base">24/7 Support: (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
}