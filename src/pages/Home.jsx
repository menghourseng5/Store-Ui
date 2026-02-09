import Card from "../components/Card";
function Home() {
  return (
    <div className="font-jost">
      <div className="bg-[url('./assets/images/slide_02.jpg')] bg-secondary bg-center bg-cover lg:bg-contain bg-no-repeat flex items-center h-screen px-4 lg:px-40 ">
        <div>
          <h2 className="text-4xl font-bold">New Collection</h2>
          <h1 className="text-6xl lg:text-7xl font-bold mb-2">
            Luxury without <br /> Labels
          </h1>
          <p>Explore new-in products and best sellers</p>
          <button className="bg-primary text-white px-8 py-2 mt-4">
            View Collection
          </button>
        </div>
      </div>
      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto ">
        <h2 className="text-center text-3xl font-bold">Best Seller</h2>
        <p className="text-center">Explore our best seller products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center mt-4 ">
          <button
            className="bg-transparent   px-8 border border-primary text-primary 
          
           hover:bg-primary hover:text-white transition-all
          
          "
          >
            Explore More Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
