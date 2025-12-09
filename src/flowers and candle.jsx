import React from "react";

const FlowersCandles = () => {
  const products = [
    {
      name: "Rose Bouquet",
      price: "₹699",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",

      type: "Flower",
    },
    {
      name: "Lily Basket",
      price: "₹799",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",

      type: "Flower",
    },
    {
      name: "Vanilla Scented Candle",
      price: "₹499",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",


      type: "Candle",
    },
    {
      name: "Lavender Aroma Candle",
      price: "₹549",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",

      type: "Candle",
    },
  ];

  return (
    <section className="p-10 text-center bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Flowers & Candles 🌸🕯️
      </h1>
      <p className="text-gray-700 mb-10 text-lg">
        Beautiful flowers and fragrant candles to brighten your celebrations!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-lg bg-white hover:shadow-pink-200 transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{item.type}</p>
              <p className="text-pink-500 font-medium mb-3">{item.price}</p>
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

export default FlowersCandles;
