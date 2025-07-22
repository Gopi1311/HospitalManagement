export default function Hero() {
  return (
    <section className="relative bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center py-20 md:py-32">
      <div className="absolute inset-0 bg-blue-900/40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl text-white py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Leading the Way<br />in Medical Excellence
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-lg">
            Providing exceptional healthcare services with a focus on patient comfort and well-being.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-blue-700 transition text-sm sm:text-base">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}