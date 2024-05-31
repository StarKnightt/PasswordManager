import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div className="logo font-bold  text-white text-2xl">
        <span className="text-blue-400"> &lt;</span>
        Lock<span className="text-blue-500"> Magic/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        Created with <img className="w-7 mx-2" src="icons/heart.png" alt="" />{" "}
        by Prasen
      </div>
    </div>
  );
};

export default Footer;
