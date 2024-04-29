import React from "react";
const Categories = [
  {
    text: "Male Outfit  ",
    image:
      "C:UserspandeDesktopReact ProjectEcommerce-React-projectsrcassetsFeaturedCategoriesmaleoutfit.jpg",
  },
  {
    text: "Mobile ",
    image:
      "C:UserspandeDesktopReact ProjectEcommerce-React-projectsrcassetsFeaturedCategoriesMobile.jpg",
  },
  {
    text: "Shoes",
    image:
      "C:UserspandeDesktopReact ProjectEcommerce-React-projectsrcassetsFeaturedCategoriesShoes.jpeg",
  },
  {
    text: "Kid Toy's",
    image:
      "C:UserspandeDesktopReact ProjectEcommerce-React-projectsrcassetsFeaturedCategoriesToys.jpg",
  },
  {
    text: "Furniture",
    image:
      "C:UserspandeDesktopReact ProjectEcommerce-React-projectsrcassetsFeaturedCategoriesFurniture.jpeg",
  },
  {
    text: "Snacks",
    image: "./src/assets/Snacks.jpg",
  },
];
const Featured = () => {
  return (
    <>
      <div className="bg-yellow-500">
        <div className="w-10/12 mx-auto flex flex-col gap-5">
          <div className="text-2xl ">Featured Categories</div>
          <div className="flex gap-6">
            {Categories.map((val, i) => {
              return (
                <div className="w-40 h-28 bg-green-500 relative cursor-pointer group rounded-lg">
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
