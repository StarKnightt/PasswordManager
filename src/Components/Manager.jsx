import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="mx-auto bg-slate-800 max-w-4xl">
        <h1>PasswordManager</h1>
        <p>Your own password manager</p>
        <div className="text-white flex flex-col p-4">
          <input className="rounded-full" type="text" name="" id="" />
          <div className="flex">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
