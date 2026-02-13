import Card from "../components/Card";

function Product() {
  return (
    <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto">
      <h1 className="text-center text-3xl uppercase">Product Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Product;
