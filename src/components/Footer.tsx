import { Link } from "react-router-dom";
import Logo from "./Logo";
import { products } from "../data";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-600  ">
      <div className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto  py-12 text-primary-100">
        {/* content */}
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <Logo />
              <span className="font-medium">Fuji Technica Indonesia</span>
            </div>
            <p className="w-3/4 mt-4 text-sm font-medium">
              FTI is your trusted partner for precision, reliability, and value
            </p>

            <div className="flex gap-3 mt-6 items-center">
              {/* Linkedin */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-primary-100 group-hover:text-white"
                >
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.67H6.26V17H8.34ZM7.3 9.8A1.2 1.2 0 1 0 7.3 7.4A1.2 1.2 0 0 0 7.3 9.8ZM17.74 17V13.53C17.74 11.67 16.75 10.53 15.09 10.53C14.29 10.53 13.74 10.97 13.44 11.39V10.67H11.36C11.39 11.15 11.36 17 11.36 17H13.44V13.47C13.44 13.28 13.45 13.09 13.51 12.95C13.66 12.57 14 12.18 14.58 12.18C15.34 12.18 15.64 12.76 15.64 13.61V17H17.74Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-primary-100 group-hover:text-white"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM18 4A1 1 0 1 1 18 6A1 1 0 0 1 18 4ZM12 7A5 5 0 1 1 7 12A5 5 0 0 1 12 7ZM12 9A3 3 0 1 0 15 12A3 3 0 0 0 12 9Z" />
                </svg>
              </a>

              {/* Youtube */}
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-primary-100 group-hover:text-white"
                >
                  <path d="M21.8 8S21.6 6.6 21 6C20.2 5.2 19.3 5.2 18.9 5.1C16.2 4.9 12 4.9 12 4.9H12C12 4.9 7.8 4.9 5.1 5.1C4.7 5.2 3.8 5.2 3 6C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.3V12.8C2 14.4 2.2 16 2.2 16S2.4 17.4 3 18C3.8 18.8 4.9 18.8 5.4 18.9C7.3 19.1 12 19.1 12 19.1S16.2 19.1 18.9 18.9C19.3 18.8 20.2 18.8 21 18C21.6 17.4 21.8 16 21.8 16S22 14.4 22 12.8V11.3C22 9.6 21.8 8 21.8 8ZM10 15V9L15 12L10 15Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="space-y-2 text-sm">
              <div className="font-bold">Capabilities</div>
              {products.map((p) => (
                <Link
                  to={"#"}
                  key={p.title}
                  className="hover:text-primary-100 transition-all block text-primary-200"
                >
                  {p.title}
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <div className="font-bold">Capabilities</div>
              {products.map((p) => (
                <Link
                  to={"#"}
                  key={p.title}
                  className="hover:text-primary-100 transition-all block text-primary-200"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-12 py-4 border-t border-primary-100 flex justify-between items-center">
          <p className="text-sm">
            © 2026 PT. Fuji Technica Indonesia · All rights reserved
          </p>
          <Link to={"#"} className="block underline text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
