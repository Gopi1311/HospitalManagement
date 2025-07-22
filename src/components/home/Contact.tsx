import { PhoneCall, MapPin, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <p className="text-sm text-blue-700 font-semibold uppercase">
          GET IN TOUCH
        </p>
        <h2 className="text-2xl font-semibold text-blue-900">Contact</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactData.map((contact) => (
          <div
            key={contact.id}
            className={`${contact.bgColor} ${contact.textColor} rounded-lg p-6 flex flex-col items-center space-y-3 cursor-pointer hover:shadow-lg transition-shadow`}
          >
            <div>{contact.icon}</div>
            <h3 className="font-semibold">{contact.title}</h3>
            {contact.lines.map((line, idx) => (
              <p key={idx} className="text-sm ">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
