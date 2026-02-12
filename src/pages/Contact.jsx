function Contact() {
  return (
    <>
      <div className="max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost">
        <form action="" className="w-full shadow-md p-4">
          <h1 className="text-center text-3xl font-bold">Contact Us</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Input Your Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all  ease-in-out "
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Input Your Phone Number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all  ease-in-out "
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Message" className="block mb-2">
              Message:
            </label>
            <textarea
              type="text"
              placeholder="Input Your Message"
              className="w-full p-2
              border border-gray-300 rounded-md focus:outline-none focus:ring-2
              focus:ring-black transition-all ease-in-out "
            ></textarea>
          </div>
          <div className="flex justify-end">
            {" "}
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
