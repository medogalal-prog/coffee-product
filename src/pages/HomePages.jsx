import React, { useEffect, useState } from "react";
import { Link } from "react-router";
function HomePages() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getDrinks() {
    try {
      const req = await fetch("https://api.sampleapis.com/coffee/hot");
      const data = await req.json();
      setDrinks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getDrinks();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <section className="px-6 lg:px-16 py-10 bg-gray-50 dark:bg-black min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className=" rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gray-50 dark:bg-gray-900 "
          >
            <div className="h-64 overflow-hidden">
              <img
                src={drink.image}
                alt={drink.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col h-[250px]">
              <h2 className="text-2xl font-bold text-gray-800 line-clamp-1 dark:text-white">
                {drink.title}
              </h2>

              <p className="text-gray-500 text-sm leading-6 mt-3 line-clamp-3 flex-1">
                {drink.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {Array.isArray(drink.ingredients) ? (
                  drink.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold"
                    >
                      {ingredient}
                    </span>
                  ))
                ) : (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                    {drink.ingredients}
                  </span>
                )}
                <Link
                  to={`/Home/${drink.id}`}
                  className="mt-6 w-full bg-amber-500 text-center hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePages;
