import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tech from "../assets/tech.jpg";
import CardFloating from "../components/CardFloating";

import FormingSimulation from "../assets/forming-simulation.avif";
import Design from "../assets/design.jpg";
import Machine from "../assets/machine.jpg";
import CadCam from "../assets/cad-cam.avif";
import BarPercentage from "../components/BarPercentage";

import SubAssem from "../assets/sub-aasembly.jpg";

const engineers = [
  {
    title: "Forming simulation",
    image: FormingSimulation,
  },
  {
    title: "Die Design",
    image: Design,
  },
  {
    title: "CAD/CAM",
    image: CadCam,
  },
];

const lines = [
  {
    total: "2.800",
    line: "A",
  },
  {
    total: "2.200",
    line: "B",
  },
  {
    total: "3.000",
    line: "C",
  },
  {
    total: "2.800",
    line: "D",
  },
];

const Technology = () => {
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
            Technology
          </h1>
        </div>
        <Navbar />
      </div>

      {/* content */}
      <main className="w-full bg-background text-primary-900">
        {/* Engineering */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">Engineering</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>

            <p className="mt-4">
              To produce high quality and precision dies, we use the technology
              provided by the CAD/CAM (Computer Aided Design/Computer Aided
              Manufacturing) and also we already have implemented CAE (Computer
              Aided Engineering) for precision designs, manufacturing and
              computerize process simulation.
            </p>
          </div>

          <div className="mt-6">
            {engineers.map((e, i = 1) => (
              <CardFloating
                reverse={i % 2 > 0}
                image={e.image}
                title={e.title}
              ></CardFloating>
            ))}
          </div>
        </section>
        {/* Die Manufacturing */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Die Manufacturing
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>

            <p className="mt-4">
              Qualified and Reliable tooling for Outer & High Tensile Body Parts
              should make from a precision manufacturing fascilities.
            </p>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-12 gap-4">
              <img
                src={Machine}
                alt="machine"
                className="col-span-4 h-80 object-cover"
              />
              <div className="col-span-8 px-4">
                <div className="text-2xl">Machining</div>
                <p className="mt-4 text-sm">
                  To produce high precision dies, FTI uses the cutting-edge
                  technology made available through the 5-Axis CNC (Computer
                  Numerical Control), equipment, all of there are operated by
                  experienced technicians. The last step in the die
                  manufacturing process is “finishing”, which involves, spotting
                  and try-out. This entire process is supported by both a fully
                  equipped facility and dedicated, experienced team of experts.
                </p>

                <table className="border-separate border-spacing-y-3">
                  <thead>
                    <tr className="">
                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Maker
                      </th>

                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Type
                      </th>

                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Capacity
                      </th>

                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Qty
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <tr key={i} className="text-center">
                        <td className=" border-b-2 border-primary-500 px-4">
                          Toshiba
                        </td>
                        <td className=" border-b-2 border-primary-500 px-4">
                          MPF-26408
                        </td>
                        <td className=" border-b-2 border-primary-500 px-4">
                          4000 X 2100
                        </td>
                        <td className=" border-b-2 border-primary-500 px-4">
                          1
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-12">
              <img
                src={Machine}
                alt="machine"
                className="col-span-4 h-80 object-cover"
              />
              <div className="col-span-8 px-4">
                <div className="text-2xl">Machine</div>
                <p className="mt-4 text-sm">
                  To produce high precision dies, FTI uses the cutting-edge
                  technology made available through the 5-Axis CNC (Computer
                  Numerical Control), equipment, all of there are operated by
                  experienced technicians. The last step in the die
                  manufacturing process is “finishing”, which involves, spotting
                  and try-out. This entire process is supported by both a fully
                  equipped facility and dedicated, experienced team of experts.
                </p>

                <table className="border-separate border-spacing-y-3">
                  <thead>
                    <tr className="">
                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Maker
                      </th>

                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Type
                      </th>

                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Capacity
                      </th>

                      <th className="pb-2 border-b-4 border-primary-500 px-8">
                        Qty
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <tr key={i} className="text-center">
                        <td className=" border-b-2 border-primary-500 px-4">
                          Toshiba
                        </td>
                        <td className=" border-b-2 border-primary-500 px-4">
                          MPF-26408
                        </td>
                        <td className=" border-b-2 border-primary-500 px-4">
                          4000 X 2100
                        </td>
                        <td className=" border-b-2 border-primary-500 px-4">
                          1
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Stamping & Sub-Assembling */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24 pb-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Stamping & Sub-Assembling
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>

            <p className="mt-4">
              Affording and Complying our customer need in automotive
              manufacturing, FTI use the precision tooling and machine for
              stamping and sub-assembling part production.
            </p>
          </div>

          <div className="mt-6">
            <div>
              <div className="font-bold">Stamping Line</div>

              <div className="grid grid-cols-4 gap-8 mt-4">
                {lines.map((l) => (
                  <div className="bg-white px-6 py-6 text-center border border-border">
                    <div className="space-y-1 pb-4 border-b border-foreground">
                      <div className="text-sm font-bold text-primary-700 text-center">
                        Line {l.line}
                      </div>
                      <div className="text-primary-700 font-bold text-2xl">
                        {l.total} <span className="text-base">T</span>
                      </div>
                      <p className="text-xs">Total press force · 4 machines</p>
                    </div>

                    <div className="w-full flex gap-4 mt-4">
                      <div className="space-y-2">
                        <div className="flex gap-4 items-center">
                          <span className="text-sm">1000T</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span className="text-sm">800T</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span className="text-sm">500T</span>
                        </div>
                        <div className="flex gap-4 items-center">
                          <span className="text-sm">500T</span>
                        </div>
                      </div>
                      <div className="w-full flex-1 flex flex-col gap-3">
                        <BarPercentage percentage={100} className="h-2" />
                        <BarPercentage percentage={80} className="h-2" />
                        <BarPercentage percentage={50} className="h-2" />
                        <BarPercentage percentage={50} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24">
              <div className="grid grid-cols-12 gap-4">
                <img
                  src={SubAssem}
                  alt="machine"
                  className="col-span-4 h-80 object-cover"
                />
                <div className="col-span-8 px-4">
                  <div className="text-2xl font-bold">Sub-Assembling</div>
                  <p className="mt-4">
                    Fuji Technica Indonesia delivers high-precision sub assembly
                    with 17 robot spot welders, CO robots, and automated nut
                    feeders. Our capabilities include stationary & portable spot
                    welding, CO welding, and hemming, supported by 150kVA-class
                    welders and advanced control systems.
                  </p>

                  <div className="flex gap-6 mt-6">
                    <div className="bg-primary-500 text-primary-100 px-4 py-2 font-medium text-xs">
                      200,000 Units/yr
                    </div>
                    <div className="bg-primary-500 text-primary-100 px-4 py-2 font-medium text-xs">
                      NDT Matrixeye
                    </div>
                    <div className="bg-primary-500 text-primary-100 px-4 py-2 font-medium text-xs">
                      93 MP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Technology;
