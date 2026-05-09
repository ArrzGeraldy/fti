import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="bg-primary-700 text-white p-2 font-bold rounded-full"
    >
      FTI
    </Link>
  );
};

export default Logo;
