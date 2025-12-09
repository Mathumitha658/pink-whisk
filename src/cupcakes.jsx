import React from "react";

const Cupcakes = () => {
  const cupcakes = [
    {
      name: "Vanilla Swirl Cupcake",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1587653692097-1e9e8a5e39b1"
    },
    {
      name: "Chocolate Fudge Cupcake",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1587653692097-1e9e8a5e39b1"
    },
    {
      name: "Strawberry Bliss Cupcake",
      price: "₹229",
      img: "https://images.unsplash.com/photo-1587653692097-1e9e8a5e39b1"
    },
  ];

  return (
    <section className="p-10 text-center bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Our Cupcakes 🧁</h1>
      <p className="text-gray-700 mb-10 text-lg">
        Sweet, soft, and colorful cupcakes for every mood!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cupcakes.map((cupcake, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-lg bg-white hover:shadow-pink-200 transition-shadow duration-300"
          >
            <img
              src={cupcake.img}
              alt={cupcake.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {cupcake.name}
              </h3>
              <p className="text-pink-500 font-medium mb-3">{cupcake.price}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cupcakes;
