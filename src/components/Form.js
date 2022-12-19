import React from "react";

const Form = (props) => {
  return (
    <div className="container mx-auto px-4 md:px-8 pt-8 max-w-screen-lg">
      <div className="md:flex gap-2">
        <input
          type="text"
          className="mt-2 w-full md:w-1/2 block rounded-md bg-white border-amber-200 focus:border-amber-500 focus:bg-amber-100 focus:ring-0"
          placeholder="top text"
        />
        <input
          type="text"
          className="mt-2 w-full md:w-1/2 block rounded-md bg-white border-amber-200 focus:border-amber-500 focus:bg-amber-100 focus:ring-0"
          placeholder="bottom text"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-amber-400 hover:bg-amber-600 hover:text-white cursor-pointer py-2"
        onClick={props.getMeme}
      >
        Generate a meme!
      </button>
    </div>
  );
};

export default Form;
