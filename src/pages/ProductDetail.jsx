import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading } = useGetOneProduct(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-20">
        <div className="h-8 w-8 border-2 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 w-full py-1 font-jost">
        <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-1 text-sm">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/product">Product</Link>
          <span> / </span>
          <span>{data.category}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-1 border border-gray-300">
            <img
              className="w-full h-full object-cover"
              src={data.image}
              alt={data.title}
            />
          </div>

          <div>
            <h3 className="text-xl">{data.category}</h3>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <h1 className="text-lg font-semibold">${data.price}</h1>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 my-8">
              <div className="border border-gray-300 flex items-center gap-4 w-32 py-2 justify-evenly">
                <button>-</button>
                <button>1</button>
                <button>+</button>
              </div>

              <button className="bg-primary px-8 py-2 text-white">
                Add to cart
              </button>
              <button className="bg-amber-400 px-8 py-2 text-white hover:bg-amber-500 transition-all">
                Pay now
              </button>
            </div>

            <hr />
            <p className="mt-4">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
