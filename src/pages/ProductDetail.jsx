import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading } = useGetOneProduct(id);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-20">
        <div className="h-8 w-8 border-2 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleQuantity = (type) => {
    if (type === "inc") setQuantity(quantity + 1);
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 w-full py-1 font-jost">
        <div className="max-w-[90%] lg:max-w-5xl mx-auto flex flex-wrap items-center gap-1 text-sm">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/product">Product</Link>
          <span> / </span>
          <span>{data.category}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="p-1 border border-gray-300">
            <img
              className="w-full h-auto object-cover"
              src={data.image}
              alt={data.title}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl">{data.category}</h3>
            <h1 className="text-2xl sm:text-3xl font-bold my-2">
              {data.title}
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4">
              ${data.price}
            </h2>

            {/* Quantity & Actions */}
            <div className="flex flex-col   sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="border border-gray-300 flex items-center gap-4 w-1/3 py-2 justify-evenly">
                <button onClick={() => handleQuantity("dec")}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantity("inc")}>+</button>
              </div>

              <button className="bg-primary w-1/3 py-2 text-white rounded">
                Add to cart
              </button>
              <button className="bg-amber-400 w-1/3 py-2 text-white rounded hover:bg-amber-500 transition-all">
                Pay now
              </button>
            </div>

            <hr />
            <p className="mt-4 text-sm sm:text-base">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
