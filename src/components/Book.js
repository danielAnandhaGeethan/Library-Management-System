import React, { useEffect, useState } from "react";
import notFound from "../images/not_found.jpg";

const Book = ({ book, data, setData, enqueueSnackbar }) => {
  const colours = ["red", "pink", "orange", "lime", "teal", "cyan", "indigo"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let x = Math.floor(Math.random() * (6 - 0 + 1));

    setIndex(x);
  }, []);

  const genreClassName = `text-white text-sm px-1 rounded-2xl bg-${colours[index]}-500`;

  const onButtonClick = (title, author, description, image) => {
    if (title === undefined) {
      enqueueSnackbar("Title value error", {
        autoHideDuration: 5000,
        variant: "error",
      });
    }

    if (author === undefined) {
      enqueueSnackbar("Author value error", {
        autoHideDuration: 5000,
        variant: "error",
      });
    }

    if (description === undefined) {
      enqueueSnackbar("Description error", {
        autoHideDuration: 5000,
        variant: "error",
      });
    }

    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    const cartItem = {
      id,
      title,
      author,
      description,
      image: image !== undefined ? image : "notFound",
    };

    setData([...data, cartItem]);

    let x = JSON.stringify(data);
    localStorage.setItem("books", x);

    enqueueSnackbar("Book added to cart", {
      autoHideDuration: 3000,
      variant: "success",
    });
  };

  return (
    <div className="mt-3 mb-5 h-[200px] bg- flex justify-center relative group">
      <div
        className="w-[40%] h-full object-cover transition-transform transform translate-x-0 group-hover:translate-x-[-75%] cursor-pointer"
        style={{
          backgroundImage:
            book.volumeInfo.imageLinks !== undefined &&
            book.volumeInfo.imageLinks.thumbnail !== undefined
              ? `url(${book.volumeInfo.imageLinks.thumbnail})`
              : `url(${notFound})`,
          backgroundSize: "100% 100%",
        }}
        alt={book.volumeInfo.title}
      >
        <div className="bg-black p-1 flex flex-col justify-between bg-opacity-50 w-[150%] h-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[67%]">
          <div>
            <h2 className="text-white font-bold text-md line-clamp-2">
              Title : {book.volumeInfo.title}
            </h2>
            <p className="text-white line-clamp-2">
              Author :{" "}
              {book.volumeInfo.authors !== undefined
                ? book.volumeInfo.authors[0]
                : "Unknown"}
            </p>
            <p className="text-white text-sm">
              Genre :{" "}
              {book.volumeInfo.categories !== undefined
                ? book.volumeInfo.categories.map((category, index) => (
                    <button key={index} className={genreClassName}>
                      {category}
                    </button>
                  ))
                : "-"}
            </p>
            <button className="text-white bg-yellow-500 text-sm px-1 rounded-2xl">
              {book.volumeInfo.publishedDate !== undefined
                ? book.volumeInfo.publishedDate.slice(0, 4)
                : "Not Known"}
            </button>
          </div>
          <div className="flex justify-end">
            <button
              className="text-sm bg-green-500 px-1 rounded-full hover:scale-105"
              onClick={() =>
                onButtonClick(
                  book.volumeInfo.title ? book.volumeInfo.title : "",
                  book.volumeInfo.authors ? book.volumeInfo.authors[0] : "",
                  book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "",
                  book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                    ? book.volumeInfo.imageLinks.thumbnail
                    : undefined
                )
              }
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
