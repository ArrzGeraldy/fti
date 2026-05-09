import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 text-white absolute z-10">
      <div className="w-[90%] md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex gap-4 items-center text-sm font-medium">
          <Link to={"/about"}>About</Link>
          <Link to={"/capability"}>Capabilities</Link>
          <Link to={"/technology"}>Technology</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
