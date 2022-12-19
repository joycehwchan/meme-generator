import React, { useState, useEffect } from "react";
import Form from "./Form";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1yxkcp.jpg",
  });

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

  const getMeme = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: url,
    }));
  };

  // fetch memes from api on mount
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <main className="bg-amber-50">
      <Form getMeme={getMeme} addText={addText} meme={meme} />
      <div className="container max-h-[70vh] w-fit relative mx-auto px-4 md:px-8 max-w-screen-lg flex justify-center py-6">
        <p className="meme__text text__top">{meme.topText}</p>
        <p className="meme__text text__bottom">{meme.bottomText}</p>
        <img
          src={meme.image}
          alt="meme"
          className="w-full rounded-md object-contain min-w-[60vw]"
        />
      </div>
    </main>
  );
};

export default Meme;
