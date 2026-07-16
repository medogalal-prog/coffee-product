import { Button } from "@/components/ui/button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

function singlePage() {
  const { id } = useParams();
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart,setCart]=useState()
  function addCart(){
    alert("✅ Product added to cart successfully!")
  }
  async function getDrinks() {
    try {
      const req = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
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
    <section className="py-10 bg-gray-50 dark:bg-black min-h-screen">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="h-[500px] overflow-hidden rounded-2xl">
              <img
                src={drinks.image}
                alt={drinks.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {drinks.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-6 text-lg">
              {drinks.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {Array.isArray(drinks.ingredients) ? (
                drinks.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium"
                  >
                    {ingredient}
                  </span>
                ))
              ) : (
                <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium">
                  {drinks.ingredients}
                </span>
              )}
            </div>

            <Button onClick={()=>setCart(addCart())} className="mt-10 w-full px-8 py-6 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default singlePage;
