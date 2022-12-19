import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="text-slate-50">
      <div className="w-screen px-6 md:px-12 py-3 flex items-center justify-between bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="flex">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="font-bold text-xl self-center">Meme Generator</h1>
        </div>
        <div className="text-xl hover:scale-110 cursor-pointer duration-200">
          <a href="https://github.com/joycehwchan/meme-generator">
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
