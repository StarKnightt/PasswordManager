import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="bg-slate-50 mycontainer">
        <h1 className="text-4xl text font-bold text-center">  
        <span className='text-green-600'> &lt;</span>
        Lock<span className='text-green-600'>  Magic/&gt;</span></h1>
        <p className="text-green-900 text-lg text-center">Your Trusted Guardian in the Digital World</p>
        <div className="text-white flex flex-col p-4 text-black gap-8">
          <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
          <div className="flex w-full justify-between gap-8">
          <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
          <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
