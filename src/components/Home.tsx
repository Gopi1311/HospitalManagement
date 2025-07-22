import Hero from "./home/Hero";
import InfoCards from "./home/InfoCards";
import Welcome from "./home/Welcome";
import Services from "./home/Services";
import Appointment from "./home/Appointment";
import BookAppoint from "./home/BookAppoint";
import Doctors from "./home/Doctors";
import News from "./home/News";
import Contact from "./home/Contact";


const Home = () => {
  return (
    <>
      <Hero />
      <InfoCards />
      <Welcome />
      <Services />
      <Appointment />
      <BookAppoint />
      <Doctors />
      <News />
      <Contact/>
    </>
  );
};

export default Home;
