import Card from "../components/Card";
import useGetAllProduct from "../hooks/useGetAllProduct";

function Product() {
  const { data, isLoading } = useGetAllProduct();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-20">
        <div className="h-8 w-8 border-2 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
      <h1 className="text-center text-3xl uppercase">Product Page</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Product;
