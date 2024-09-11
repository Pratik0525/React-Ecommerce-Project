import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
const Value = [
  {
    title: "This is the title.",
    description:
      "Nunc fringilla dolor eu lacus euismod in tempor lectus viverra. Integer bibendum, elit vel euismod feugiat, urnarisus eleifend est, in finibus justo metus nec ante. Sed eusapien a quam tempus dapibus. In hac habitasse plateadictumst. Sed feugiat, urna in congue fermentum, elit metusvolutpat nisl, nec fermentum urna felis nec est. Sed sed justolectus. Phasellus lacinia, risus quis vulputate gravida, odionisi bibendum ex, id feugiat justo arcu non neque.",
  },
  {
    title: "How can I place an order?",
    description:
      "Nunc fringilla dolor eu lacus euismod in tempor lectus viverra. Integer bibendum, elit vel euismod feugiat, urnarisus eleifend est, in finibus justo metus nec ante. Sed eusapien a quam tempus dapibus. In hac habitasse plateadictumst. Sed feugiat, urna in congue fermentum, elit metusvolutpat nisl, nec fermentum urna felis nec est. Sed sed justolectus. Phasellus lacinia, risus quis vulputate gravida, odionisi bibendum ex, id feugiat justo arcu non neque.",
  },
  {
    title: " What payment methods do you accept?",
    description:
      "Nunc fringilla dolor eu lacus euismod in tempor lectus viverra. Integer bibendum, elit vel euismod feugiat, urnarisus eleifend est, in finibus justo metus nec ante. Sed eusapien a quam tempus dapibus. In hac habitasse plateadictumst. Sed feugiat, urna in congue fermentum, elit metusvolutpat nisl, nec fermentum urna felis nec est. Sed sed justolectus. Phasellus lacinia, risus quis vulputate gravida, odionisi bibendum ex, id feugiat justo arcu non neque.",
  },
  {
    title: "How can I track my order?",
    description:
      "Nunc fringilla dolor eu lacus euismod in tempor lectus viverra. Integer bibendum, elit vel euismod feugiat, urnarisus eleifend est, in finibus justo metus nec ante. Sed eusapien a quam tempus dapibus. In hac habitasse plateadictumst. Sed feugiat, urna in congue fermentum, elit metusvolutpat nisl, nec fermentum urna felis nec est. Sed sed justolectus. Phasellus lacinia, risus quis vulputate gravida, odionisi bibendum ex, id feugiat justo arcu non neque.",
  },
  {
    title: " What is your return policy?",
    description:
      "Nunc fringilla dolor eu lacus euismod in tempor lectus viverra. Integer bibendum, elit vel euismod feugiat, urnarisus eleifend est, in finibus justo metus nec ante. Sed eusapien a quam tempus dapibus. In hac habitasse plateadictumst. Sed feugiat, urna in congue fermentum, elit metusvolutpat nisl, nec fermentum urna felis nec est. Sed sed justolectus. Phasellus lacinia, risus quis vulputate gravida, odionisi bibendum ex, id feugiat justo arcu non neque.",
  },
  {
    title: "How long does shipping take?",
    description:
      "Nunc fringilla dolor eu lacus euismod in tempor lectus viverra. Integer bibendum, elit vel euismod feugiat, urnarisus eleifend est, in finibus justo metus nec ante. Sed eusapien a quam tempus dapibus. In hac habitasse plateadictumst. Sed feugiat, urna in congue fermentum, elit metusvolutpat nisl, nec fermentum urna felis nec est. Sed sed justolectus. Phasellus lacinia, risus quis vulputate gravida, odionisi bibendum ex, id feugiat justo arcu non neque.",
  },
];
const Frequentlyaskquestion = () => {
  const [accordionOpen, setaccordionOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col pb-20 pt-10 gap-10">
        <div className="w-11/12 mx-auto">
          <span className="text-2xl">
            Frequently Asked <span className="text-[#AD43AD]"> Questions </span>
          </span>
        </div>
        <div className=" flex flex-col gap-10">
          {Value.map((val, i) => {
            return (
              <>
                {" "}
                <div className="w-11/12 mx-auto">
                  <button
                    className=" flex justify-between items-center px-5 w-full h-12 shadow-md shadow-gray-300 "
                    onClick={() => setaccordionOpen(!accordionOpen)}
                  >
                    <span className="text-xl">{val.title}</span>
                    {accordionOpen ? (
                      <span>
                        <MdOutlineKeyboardArrowUp className="text-2xl" />
                      </span>
                    ) : (
                      <span>
                        <MdKeyboardArrowDown className="text-2xl" />
                      </span>
                    )}
                  </button>
                  <div
                    className={` grid overflow-hiddden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                      accordionOpen
                        ? " grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-2">
                      {val.description}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Frequentlyaskquestion;
