import HeroImage from "../assets/hero.jpg";
import Navbar from "../components/Navbar";

import GlobalMap from "../assets/map.png";
import FTI from "../assets/fti.webp";
import customers from "../utils/customer";
import ContactCard from "../components/ContactCard";
import BarPercentage from "../components/BarPercentage";
import ProductCard from "../components/ProductCard";
import { products } from "../data";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import { useInView } from "react-intersection-observer";

const markets = [
  { region: "Indonesia", percentage: 54 },
  { region: "Thailand", percentage: 14 },
  { region: "Malaysia", percentage: 8 },
  { region: "Japan", percentage: 8 },
  { region: "India", percentage: 5 },
  { region: "Mexico", percentage: 5 },
  { region: "Turkey", percentage: 4 },
  { region: "Pakistan", percentage: 2 },
];

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <>
      {/* hero section */}
      <div
        className="w-full h-screen bg-black bg-cover relative"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="w-full h-screen bg-linear-to-b from-black to-transparent absolute top-0 flex items-center justify-center">
          <h1 className="text-5xl font-medium text-white w-1/2 text-center">
            Precision in Every Press, Quality in Every Component.
          </h1>
        </div>
        <Navbar />
      </div>

      {/* content */}
      <main className="w-full bg-background">
        {/* FTI section */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">FTI</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-12 mt-6 gap-12">
            <div className="col-span-7 space-y-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ea eos at a exercitationem consequatur quae blanditiis nobis
                reiciendis molestias, voluptatum fugit, eaque aut. Rem quidem
                sed voluptatum laudantium reprehenderit fugit magni totam
                repellendus dolore, ab, architecto itaque placeat molestiae
                consequatur quia aut.
              </p>

              <div className="flex items-center justify-between" ref={ref}>
                <div>
                  <h2 className="text-3xl font-bold text-primary-700 text-center">
                    <Counter start={inView} end={30} suffix="+" />
                  </h2>
                  <h4 className="font-bold">Years Experience</h4>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary-700 text-center">
                    <Counter start={inView} end={25} suffix="M" />
                  </h2>
                  <h4 className="font-bold">Stamping Strokes</h4>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary-700 text-center">
                    <Counter start={inView} end={200} suffix="K" />
                  </h2>
                  <h4 className="font-bold">Sub-Assy Units</h4>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary-700 text-center">
                    <Counter start={inView} end={8} suffix="" />
                  </h2>
                  <h4 className="font-bold">Global Markets</h4>
                </div>
              </div>
            </div>

            <div className="col-span-5">
              <img
                src={FTI}
                alt="company-image"
                className="h-3/4 w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* what we do section */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">What We Do</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div
            className="grid grid-cols-2 mt-6 text-primary-900 gap-x-8 gap-y-8"
            data-aos="fade-up"
          >
            {/* card */}
            {products.map((p) => (
              <ProductCard product={p} />
            ))}
          </div>
        </section>

        {/* global market */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24 text-primary-900 overflow-x-hidden">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Global Market
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="flex space-y-4 flex-col" data-aos="fade-right">
              {markets.map((m, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between font-bold">
                    <h6>{m.region}</h6>
                    <h6>{m.percentage}%</h6>
                  </div>

                  <BarPercentage percentage={m.percentage} />
                </div>
              ))}
            </div>
            <img src={GlobalMap} alt="global-map" data-aos="fade-left" />
          </div>
        </section>

        {/* customer */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24 text-primary-900">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Our Customers
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-4  mt-6" data-aos="fade-up">
            {customers.map((c) => (
              <img key={c} src={c} alt={c} />
            ))}
          </div>
        </section>

        {/* contact us */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24 text-primary-900 pb-56">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">Contact Us</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-12  mt-6" data-aos="fade-up">
            <ContactCard className="col-span-8" />
            <div className="col-span-4 h-80 bg-primary-300"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
