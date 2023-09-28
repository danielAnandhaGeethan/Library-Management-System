import React, { useEffect, useState } from "react";
import bg from "../images/body.jpg";
import Book from "./Book";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Body = ({ books, idle, data, setData }) => {
  const quotes = [
    {
      quote:
        "In books, I have traveled, not only to other worlds but into my own.",
      author: "Anna Quindlen",
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero",
    },
    {
      quote:
        "You can find magic wherever you look. Sit back and relax, all you need is a book.",
      author: "Dr. Seuss",
    },
    {
      quote:
        "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.",
      author: "Anna Quindlen",
    },
    {
      quote:
        "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss",
    },
    {
      quote:
        "Books open your mind, broaden your mind, and strengthen you as nothing else can.",
      author: "William Feather",
    },
    {
      quote: "Books are a uniquely portable magic.",
      author: "Stephen King",
    },
    {
      quote:
        "I find television very educational. Every time someone turns it on, I go in the other room and read a book.",
      author: "Groucho Marx",
    },
    {
      quote:
        "Reading gives us someplace to go when we have to stay where we are.",
      author: "Mason Cooley",
    },
    {
      quote: "A good book is an event in my life.",
      author: "Stendhal",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (idle === true) {
      let x = Math.floor(Math.random() * (9 - 0 + 1));

      setIndex(x);
    }
  }, [idle]);

  return idle === true ? (
    <div
      className="w-full min-h-screen"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "100% 100%" }}
    >
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-30">
        <div className="w-[35%]">
          <h2 className="text-4xl text-black font-bold text-center">
            {quotes[index].quote} <br />
            <br />
            <span className="text-white"> - {quotes[index].author}</span>
          </h2>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="max-w-[1520px] w-full min-h-screen"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "100% 100%" }}
    >
      <SnackbarProvider />
      <div className="w-full h-screen grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-black bg-opacity-40 overflow-x-hidden">
        {books.map((book, index) => (
          <Book
            book={book}
            key={index}
            data={data}
            setData={setData}
            enqueueSnackbar={enqueueSnackbar}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
