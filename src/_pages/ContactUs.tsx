import Tech from "../assets/tech.jpg";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <>
      {/* hero section */}
      <div
        className="w-full h-75 md:h-100 lg:h-125 bg-black bg-cover relative"
        style={{ backgroundImage: `url(${Tech})` }}
      >
        <div
          className="absolute top-0 w-full h-75 md:h-100 lg:h-125 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.1) 100%)",
          }}
        >
          <h1 className="text-5xl font-medium text-white w-1/2 text-center">
            Contact Us
          </h1>
        </div>
        <Navbar />
      </div>

      {/* content */}
      <main className="w-full bg-background text-primary-900">
        {/* Contact Us */}

        {/* contact us */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24 text-primary-900 pb-56">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">Contact Us</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-12  mt-6" data-aos="fade-up">
            <ContactCard className="col-span-8" />
            <div className="col-span-4 h-80 bg-primary-300 text-primary-100"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
