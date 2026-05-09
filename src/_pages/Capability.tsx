import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../assets/hero.jpg";
import { Boxes, ChevronRight, Cpu, NotebookPen } from "lucide-react";
import { products } from "../data";
import CardFloating from "../components/CardFloating";

const flows = [
  {
    icon: NotebookPen,
    name: "Order",
    desc: "Customer requirements & specifications received",
    isEnd: false,
  },
  {
    icon: Cpu,
    name: "Design",
    desc: "CAD/CAE process & simulation analysis",
    isEnd: false,
  },
  {
    icon: Boxes,
    name: "Dies",
    desc: "NC machining, prefitting, finishing & try-out",
    isEnd: false,
  },
  {
    icon: NotebookPen,
    name: "Order",
    desc: "Press production, die improvement & productivity up",
    isEnd: false,
  },
  {
    icon: Cpu,
    name: "Sub-Assy",
    desc: "Stationary & portable weld, hemming, CO weld",
    isEnd: true,
  },
];

const Capability = () => {
  return (
    <>
      {/* hero section */}
      <div
        className="w-full h-75 md:h-100 lg:h-125 bg-black bg-cover relative "
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div
          className="absolute top-0 w-full h-75 md:h-100 lg:h-125 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.1) 100%)",
          }}
        >
          <h1 className="text-5xl font-medium text-white w-1/2 text-center">
            Capability
          </h1>
        </div>
        <Navbar />
      </div>

      {/* content */}
      <main className="w-full bg-background text-primary-900">
        {/* Integrated Manufacturing System */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">
              Integrated Manufacturing System
            </h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="mt-6 grid grid-cols-5">
            {flows.map((f) => (
              <div className="bg-white border border-border flex flex-col items-center justify-center py-8 relative">
                <div className="p-3 bg-primary-600 text-primary-100 w-fit">
                  <f.icon size={28} />
                </div>
                <h2 className="text-xl font-bold mt-4">{f.name}</h2>
                <p className="text-xs text-center w-3/4 mt-2">{f.desc}</p>

                {!f.isEnd && (
                  <div className="absolute bg-primary-600 text-primary-100 p-1 right-0 z-10 translate-x-1/2">
                    <ChevronRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Products */}
        <section className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto pt-24 pb-24">
          <div>
            <h2 className="text-4xl text-primary-900 font-bold">Products</h2>
            <div className="h-1 w-12 bg-primary-500 mt-1"></div>
          </div>

          <div className="mt-6">
            {products.map((p, i = 1) => (
              <CardFloating image={p.image} title={p.title} reverse={i % 2 > 0}>
                <div className="flex gap-4 items-center mt-6">
                  {p.tags.map((t, i) => (
                    <div
                      key={i}
                      className="bg-primary-500 text-primary-100 px-4 py-2 font-medium text-xs"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </CardFloating>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Capability;
