import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Coffee Bean <span className="font-bold">Detection</span>
        </h1>
      </div>
      <div className="flex justify-between font-medium pt-2 mr-5 space-x-10 text-xl">
        <button className="hover:text-yellow-500">
          <a href="/" className="flex">
            Beranda
          </a>
        </button>
        <button className="hover:text-yellow-500">
          <a href="/" className="flex">
            Pindai
          </a>
        </button>
        <button className="hover:text-yellow-500">
          <a href="/" className="flex">
            Informasi
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
