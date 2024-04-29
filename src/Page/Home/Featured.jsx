import React from "react";
const Categories = [
  {
    text: "Male Outfit  ",
    image: "./src/assets/FeaturedCategories/maleoutfit.jpg",
  },
  {
    text: "Mobile ",
    image: "./src/assets/FeaturedCategories/Mobile.jpg",
  },
  {
    text: "Shoes",
    image: "./src/assets/FeaturedCategories/Shoes.jpeg",
  },
  {
    text: "Kid Toy's",
    image: "./src/assets/FeaturedCategories/Toys.jpg",
  },
  {
    text: "Furniture",
    image: "./src/assets/FeaturedCategories/Furniture.jpeg",
  },
  {
    text: "Snacks",
    image: "./src/assets/FeaturedCategories/Snacks.jpg",
  },
];
const Featured = () => {
  return (
    <>
      <div className="">
        <div className="w-10/12 mx-auto flex flex-col gap-5">
          <div className="text-2xl font-semibold">Featured Categories</div>
          <div className="flex gap-6">
            {Categories.map((val, i) => {
              return (
                <div className="w-40 h-28 bg-green-500 relative cursor-pointer group rounded-lg shadow-xl shadow-gray-400">
                  <img
                    src={val.image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <span
                    className="absolute top-20 left-10 text-lg scale-100 group-hover:scale-110 
                  transition-all delay-100 duration-300 ease-in-out text-white"
                  >
                    {val.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
