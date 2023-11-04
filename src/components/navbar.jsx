import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
<<<<<<< HEAD
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Coffee Bean <span className="font-bold">Detection</span>
          </h1>
        </div>
        <div className="hidden lg:flex justify-between font-medium pt-2 mr-5 space-x-10 text-xl">
          <button className="hover:text-yellow-500">
            <a href="/" className="flex">
              Home
            </a>
          </button>
          <button className="hover:text-yellow-500">
            <a href="/scan" className="flex">
              Scan
            </a>
          </button>
          <button className="hover:text-yellow-500">
            <a href="/" className="flex">
              Information
            </a>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <AiOutlineMenu size={30} />
          </button>
        </div>
=======
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Coffee Bean <span className="font-bold">Detection</span>
        </h1>
      </div>
      <div className="flex justify-between font-medium pt-2 mr-5 space-x-10 text-xl">
        <button className="hover:text-yellow-500">
          <a href="/" className="flex">
            Home
          </a>
        </button>
        <button className="hover:text-yellow-500">
          <a href="/scan" className="flex">
            Scan
          </a>
        </button>
        <button className="hover:text-yellow-500">
          <a href="/info" className="flex">
            Information
          </a>
        </button>
>>>>>>> 98d4eec7302b0052e227f686b2bfc43a0435d924
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block lg:flex justify-between bg-[#BE7656]/80 text-center space-x-10 font-medium text-xl">
          <button className="hover:text-white">
            <a href="/" className="block p-2">
              Home
            </a>
          </button>
          <button className="hover:text-white">
            <a href="/scan" className="block p-2">
              Scan
            </a>
          </button>
          <button className="hover:text-white">
            <a href="/" className="block p-2">
              Information
            </a>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
