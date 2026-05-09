import { Link } from "react-router-dom";
import type { ProductType } from "../type";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      key={product.title}
      to={"#"}
      className="bg-white w-full border border-border pb-8 hover:shadow-2xl duration-200 ease-in"
    >
      <img
        src={product.image}
        alt="die-making"
        className=" h-72 object-cover w-full"
      />
      <div className="px-4 py-2 mt-4">
        <div>
          <h2 className="text-3xl text-primary-900 font-bold">
            {product.title}
          </h2>
          <div className="h-1 w-12 bg-primary-500 mt-1"></div>
        </div>
        <p className="mt-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
