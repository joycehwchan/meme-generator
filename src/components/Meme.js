import React, { useState, useEffect } from "react";
import Form from "./Form";
import Draggable from "react-draggable";

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
      <div className="container mt-3 mx-auto max-h-[70vh] w-fit h-fit relative max-w-screen-lg flex justify-center">
        <Draggable bounds="body">
          <p className="meme__text text__top">{meme.topText}</p>
        </Draggable>
        <Draggable bounds="body">
          <p className="meme__text text__bottom">{meme.bottomText}</p>
        </Draggable>
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
