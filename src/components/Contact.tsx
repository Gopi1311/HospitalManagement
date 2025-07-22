import React, { useState } from "react";
import News from "./home/News";
import { PhoneCall, MapPin, Mail, Clock } from "lucide-react";

const contactData = [
  {
    id: 1,
    title: "EMERGENCY",
    icon: <PhoneCall size={40} />,
    lines: ["(237) 681-812-255", "(237) 668-331-894"],
    bgColor: "bg-blue-200",
    textColor: "text-blue-900",
  },
  {
    id: 2,
    title: "LOCATION",
    icon: <MapPin size={40} />,
    lines: ["012345 Some place", "9876 Some country"],
    bgColor: "bg-blue-900",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "EMAIL",
    icon: <Mail size={40} />,
    lines: ["fldineoseoess@gmail.com", "mybestducios@gmail.com"],
    bgColor: "bg-blue-200",
    textColor: "text-blue-900",
  },
  {
    id: 4,
    title: "WORKING HOURS",
    icon: <Clock size={40} />,
    lines: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
    bgColor: "bg-blue-200",
    textColor: "text-blue-900",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center py-20 md:py-32">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl text-white py-12">
            <p className="text-white font-semibold mb-2">Home / Contacts</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Our Contacts
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Map Section */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24157.123456789!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f0f0f0f%3A0x123456789abcdef!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-sm text-blue-700 font-semibold uppercase">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl font-semibold text-blue-900">Contact</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-blue-900 rounded-lg p-5 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-blue-900 border border-blue-700 rounded-md p-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-blue-900 border border-blue-700 rounded-md p-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-blue-900 border border-blue-700 rounded-md p-3 text-white placeholder-blue-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-blue-900 border border-blue-700 rounded-md p-3 text-white placeholder-blue-300 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-blue-200 text-blue-900 font-semibold rounded-md px-6 py-2 w-full hover:bg-blue-300 transition-colors duration-300 text-sm"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactData.map((contact) => (
                <div
                  key={contact.id}
                  className={`${contact.bgColor} ${contact.textColor} rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-3 transition-transform duration-300 hover:scale-[1.02] min-h-[200px]`}
                >
                  <div className="mb-3 scale-125">{contact.icon}</div>
                  <h3 className="font-semibold text-lg">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.lines.map((line, idx) => (
                      <p key={idx} className="text-sm font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News Section with Proper Spacing */}
        <div className="py-8">
          <News />
        </div>
      </div>
    </div>
  );
};


export default Contact;
