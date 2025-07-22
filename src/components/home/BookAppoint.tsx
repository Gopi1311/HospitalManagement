import React from "react";

const BookAppoint = () => {
  return (
    <div className="relative py-16 md:py-24 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Lightened background overlay */}
      <div className="absolute inset-0 bg-white opacity-60"></div>

      <div className="max-w-7xl w-full relative z-10 ">
        <div className="flex flex-col lg:flex-row justify-around rounded-xl  overflow-hidden">
          {/* Content Section */}
          <div className="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Book an Appointment
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>
          
          {/* Form Section */}
          <form className="lg:w-2/2 bg-blue-900 p-6  md:p-8 text-white space-y-4 rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 grid grid-cols-2 gap-0 border-b border-blue-700">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 bg-blue-900 border-r border-blue-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <select className="p-3 bg-blue-900 pl-3 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option className="bg-blue-800">Gender</option>
                  <option className="bg-blue-800">Male</option>
                  <option className="bg-blue-800">Female</option>
                  <option className="bg-blue-800">Other</option>
                </select>
              </div>
              
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-blue-900 border-b border-blue-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 bg-blue-900 border-b border-blue-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              
              <select className="p-3 bg-blue-900 border-b border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option className="bg-blue-800">Date</option>
                <option className="bg-blue-800">2025-06-01</option>
                <option className="bg-blue-800">2025-06-02</option>
                <option className="bg-blue-800">2025-06-03</option>
              </select>
              
              <select className="p-3 bg-blue-900 border-b border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option className="bg-blue-800">Time</option>
                <option className="bg-blue-800">09:00 AM</option>
                <option className="bg-blue-800">10:00 AM</option>
                <option className="bg-blue-800">11:00 AM</option>
              </select>
              
              <select className="p-3 bg-blue-900 border-b border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option className="bg-blue-800">Doctor</option>
                <option className="bg-blue-800">Dr. Smith</option>
                <option className="bg-blue-800">Dr. Johnson</option>
                <option className="bg-blue-800">Dr. Lee</option>
              </select>
              
              <select className="p-3 bg-blue-900 border-b border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option className="bg-blue-800">Department</option>
                <option className="bg-blue-800">Cardiology</option>
                <option className="bg-blue-800">Neurology</option>
                <option className="bg-blue-800">Orthopedics</option>
              </select>
            </div>
            
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-blue-900 border-b border-blue-700 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              rows={4}
            />
            
            <button
              type="submit"
              className="w-full bg-blue-400 text-blue-900 font-bold py-3 hover:bg-blue-300 transition rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppoint;