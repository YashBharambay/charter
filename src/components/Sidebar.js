import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 h-screen bg-green-900 ">
      <div className='flex flex-col text-center'>
      <hr className="border border-white-300 mt-4 ml-14 h-px w-2/3" />
      <h1 className='text-2xl font-bold text-white pt-1' >CHARTERS </h1>
      <hr className="border border-white-300 ml-14 h-px w-2/3" />
      <p className="text-white w-50 mt-10">
        Hampton Jitney offers the finest <br/>transportation services for groups<br/>of every size and type.
      </p>
      </div>
    </div>
  );
};

export default Sidebar;
