import Navbar from "../components/Navbar";
import FTI from "../assets/fti.webp";
import Footer from "../components/Footer";
import BarPercentage from "../components/BarPercentage";

const values = [
  {
    icon: "S",
    name: "Synergy",
  },
  {
    icon: "I",
    name: "Integrity",
  },
  {
    icon: "P",
    name: "Product Excellence",
  },
  {
    icon: "I",
    name: "Initiative",
  },
  {
    icon: "R",
    name: "Reliability",
  },
  {
    icon: "T",
    name: "Trustworthiness",
  },
];

const About = () => {
  return (
    <>
      {/* hero section */}
      <div
        className="w-full h-75 md:h-100 lg:h-125 bg-black bg-cover relative bg-center"
        style={{ backgroundImage: `url(${FTI})` }}
      >
        <div
          className="absolute top-0 w-full h-75 md:h-100 lg:h-125 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.1) 100%)",
          }}
        >
          <h1 className="text-5xl font-medium text-white w-1/2 text-center">
            About
          </h1>
        </div>
        <Navbar />
      </div>

      {/* content */}
      <main className="w-full bg-background text-primary-900">
        {/* About */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Company Profile
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-12 mt-6 gap-12">
            <div
              data-aos="fade-right"
              className="col-span-8 bg-primary-700 text-primary-100 p-12 space-y-4"
            >
              <p>
                PT. Fuji Technica Indonesia is a joint venture between PT Astra
                International Tbk, one of the biggest Indonesian Conglomerate
                Company with Fuji Technica & Miyazu Inc., a leading dies maker
                known as a world class tooling maker.
              </p>
              <p>
                Since 1995, PT. Fuji Technica Indonesia has been striving to
                contribute to the development of Indonesian automotive industry
                by developing high quality and reliable auto parts.
              </p>
              <p>
                Our core businesses are providing services in dies, jigs and
                fixtures manufacturing, parts stamping and sub-assembly welding.
                In our Karawang Plant, we have modern machineries, facilities,
                including computer aided manufacturing backed by design experts
                to suit customer needs.
              </p>
            </div>

            <div className="col-span-4 space-y-6" data-aos="fade-left">
              <div className="pb-4 border-b border-primary-500">
                <h6 className="text-primary-700 font-bold">Established</h6>
                <p className="font-bold mt-2">1995 · Karawang, West Java</p>
              </div>
              <div className="pb-4 border-b border-primary-500">
                <h6 className="text-primary-700 font-bold">Facility</h6>
                <p className="font-bold mt-2">
                  50,000 m² land · 37,584 m² building
                </p>
              </div>
              <div className="pb-4 border-b border-primary-500">
                <h6 className="text-primary-700 font-bold">Shareholder</h6>
                <BarPercentage percentage={60} />
                <div className="flex justify-between font-bold text-xs mt-2">
                  <span>Astra 59.63%</span>
                  <span>FT & Miyazu 40.37%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Vision & Mission */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Vision & Mission
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-2 mt-6" data-aos="fade-up">
            <div className="bg-white border border-border p-8">
              <div className="">Our Vision</div>
              <div className="font-bold text-2xl mt-2">
                To be world class tooling maker and stamping part manufacturing
              </div>
            </div>
            <div className="bg-primary-700 border border-border p-8 text-primary-100">
              <div className="">Our Mission</div>
              <div className="font-bold text-2xl mt-2">
                To Achieve Excellently Managed Operation
              </div>
            </div>
          </div>
        </section>
        {/* Core Value*/}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">Core Value</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="mt-6 space-y-6">
            {values.map((v) => (
              <div
                key={v.name}
                className="flex gap-4 items-center pb-4 border-b border-primary-500"
              >
                <div className="text-4xl font-bold">{v.icon}</div>
                <div>
                  <div className="text-sm font-bold">{v.name}</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto ex aliquid assumenda commodi nobis aliquam, maxime non
                    dolor sit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Certifications */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Certifications
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="flex justify-center gap-12 mt-6">
            <div
              className="bg-primary-700 px-8  h-72 flex items-center"
              data-aos="fade-right"
            >
              <h2 className="text-primary-100 font-bold">Your Certification</h2>
            </div>
            <div
              className="bg-primary-700 px-8  h-72 flex items-center"
              data-aos="fade-left"
            >
              <h2 className="text-primary-100 font-bold">Your Certification</h2>
            </div>
          </div>
        </section>
        {/* Board of Directors */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Board of Directors
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-3 gap-12 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border border-border py-8 flex flex-col items-center justify-center "
              >
                <div className="text-white bg-primary-500 p-6 text-2xl font-bold">
                  NP
                </div>
                <h2 className="text-2xl font-bold mt-4">Name Person</h2>
                <p className="text-lg font-medium mt-1">President Director</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
