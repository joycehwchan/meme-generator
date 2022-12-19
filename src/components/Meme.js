import React, { useState } from "react";
import Form from "./Form";

const Meme = () => {
  const getMeme = () => {
    console.log("clicked");
  };

  return (
    <main className="bg-amber-50">
      <Form getMeme={getMeme} />
      <div className="container mx-auto px-4 md:px-8 max-w-screen-lg flex justify-center py-6">
        <img
          src="https://images.unsplash.com/photo-1671394507023-76c50b824053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="meme"
          className="w-full rounded-md"
        />
      </div>
    </main>
  );
};

export default Meme;
