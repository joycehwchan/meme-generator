import React, { useState } from "react";
import Form from "./Form";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image:
      "https://images.unsplash.com/photo-1671394507023-76c50b824053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  });

  const getMeme = (event) => {
    event.preventDefault();
    const memes = [];
    const randomNumber = Math.floor(Math.random() * memes.length);
    // const url = memes[randomNumber].url;
    const url =
      "https://images.unsplash.com/photo-1671349507167-3abbeb490244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: url,
    }));
  };

  const addText = (event) => {
    // console.log(`${event.target.name}: ${event.target.value}`);
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });

    // console.log(text);
  };

  return (
    <main className="bg-amber-50">
      <Form getMeme={getMeme} addText={addText} meme={meme} />
      <div className="container relative mx-auto px-4 md:px-8 max-w-screen-lg flex justify-center py-6">
        <p className="meme__text text__top">{meme.topText}</p>
        <p className="meme__text text__bottom">{meme.bottomText}</p>
        <img src={meme.image} alt="meme" className="w-full rounded-md" />
      </div>
    </main>
  );
};

export default Meme;
