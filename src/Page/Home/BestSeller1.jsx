import { IoMdStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import Images1 from "../../assets/Landingpagebestseller/Shoes.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BestSeller1 = () => {
  return (
    <>
      <div className="flex  pr-5  h-full bg-white col-span-2 ">
        <div className="flex flex-col bg-[#F3ECF3]  px-5  gap-3  py-3 rounded-lg w-full ">
          <div className="flex justify-between items-center ">
            <div className="w-16 flex justify-center items-center h-8 bg-[#AD43AD] rounded-md text-white">
              New
            </div>
            <IoMdStarOutline className="text-2xl cursor-pointer" />
          </div>
          <div>
            <img src={Images1} alt="" className="w-72  h-72 object-cover" />
          </div>
          <div className="flex flex-col gap-1 py-2">
            <div className="text-md font-bold">DJI Phantom 4 Multispectral</div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-md">$232</span>
              <span className="line-through te~xt-gray-400 text-xs">$300</span>
            </div>
            <div className="flex gap-2 items-center">
              <IoStar className="text-yellow-500 text-lg" />
              <IoStar className="text-yellow-500 text-lg" />
              <IoStar className="text-yellow-500 text-lg" />
              <IoStar className="text-yellow-500 text-lg" />
              <IoMdStarOutline className="text-yellow-500 text-lg" />
            </div>
          </div>
          <div className="bg-yellow-500 flex">
            <button className="bg-[#AD43AD] w-full h-12 flex justify-center items-center gap-1 text-white">
              Add to Cart <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller1;

//    <div className="bg-cyan-500 w-6/12 ">
// <div className=" h-fit   py-8 flex  gap-10  ">
//   {Flashsales.map((val, i) => {
//     return (

//     );
//   })}
// </div>
// </div>
