import React from "react";

function About() {
  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
        <div>
          <img
            src="./about_us.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="mt-4">
            Welcome to our company! We are dedicated to providing high-quality
            products and exceptional customer service. Our team is passionate
            about innovation and delivering value to our customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
