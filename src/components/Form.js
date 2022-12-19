import React from "react";

const Form = (props) => {
  return (
    <div className="container mx-auto px-4 md:px-8 pt-8 max-w-screen-lg">
      <form onSubmit={props.getMeme}>
        <div className="md:flex gap-2">
          <input
            type="text"
            name="topText"
            value={props.meme.topText}
            onChange={props.addText}
            className="mt-2 w-full md:w-1/2 block rounded-md bg-white border-amber-200 focus:border-amber-500 focus:bg-amber-100 focus:ring-0"
            placeholder="Top text"
          />
          <input
            name="bottomText"
            type="text"
            value={props.meme.bottomText}
            onChange={props.addText}
            className="mt-2 w-full md:w-1/2 block rounded-md bg-white border-amber-200 focus:border-amber-500 focus:bg-amber-100 focus:ring-0"
            placeholder="Bottom text"
          />
        </div>

        <div className="md:flex gap-2">
          <button className="mt-2 w-full md:4/5 rounded-md bg-amber-400 hover:bg-amber-600 hover:text-white duration-200 cursor-pointer py-2">
            Change meme image!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
