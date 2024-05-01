import React from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef()
  const showPassword = () => {
    alert("show the password");
    console.log(ref.current.src)
    if(ref.current.src.includes("icons/eyecross.png")){
      ref.current.src = "icons/eye.png"
    }
    else{
    ref.current.src = "icons/eyecross.png"
    }
  }
  
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,123,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          Lock<span className="text-green-500"> Magic/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">Your Trusted Guardian in the Digital World</p>
        <div className="text-black flex flex-col p-4 text-black gap-8 items-center">
          <input placeholder="Enter website URL" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
          <div className="flex w-full justify-between gap-8">
            <input placeholder="Enter UserName" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
            <div className="relative">
            <input placeholder="Enter Password" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
            <span className="absolute right-[3px] top-[4px] cursor-pointer " onClick={showPassword}>
              <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
            </span>
            </div>

          </div>
          <button className="text-black flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900">
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            >
          </lord-icon>
           Add Password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;