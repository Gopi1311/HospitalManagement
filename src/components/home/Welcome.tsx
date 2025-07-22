import { ChevronRight } from "lucide-react";

export default function Welcome() {
  return (
    <section className="pt-12 md:pt-20 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-400 sm:text-base font-medium mb-4 sm:mb-6 tracking-wider">
            WELCOME TO MEDICAL
          </h2>
          <h3 className="text-xl sm:text-2xl text-blue-900 font-bold mb-4 sm:mb-6">
            A Great Place to Receive Care
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 mx-auto max-w-4xl">
            We are dedicated to providing the highest quality medical care with
            compassion and personal attention for all our patients. Our team of
            experienced doctors and staff are here to serve you.
          </p>
          <button className="text-blue-600 flex items-center mx-auto hover:text-blue-800 transition mb-8 sm:mb-10">
            Learn More <ChevronRight className="w-4 h-4 ml-2" />
          </button>

          {/* Image section */}
          <div className="mt-6 sm:mt-8">
            <img
              src="https://thumbs.dreamstime.com/b/doctor-medical-background-24834402.jpg"
              alt="Medical background"
              className="w-full h-auto sm:h-[15rem] object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
