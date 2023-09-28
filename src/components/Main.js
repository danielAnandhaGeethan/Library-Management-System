import React from "react";
import MainNav from "./MainNav";
import MainBody from "./MainBody";
import { useState, useEffect } from "react";

const Main = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [idle, setIdle] = useState(true);
  const token = "AIzaSyBK843e8nVwvhdlBK1CBxLTDjLujhGuIfQ";
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    searchTerm +
    "&key=" +
    token;

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const { items } = data;
      setBooks(items);
    } catch (error) {}
  };

  useEffect(() => {
    if (searchTerm === "") {
      setIdle(true);
      return;
    }
  }, [searchTerm]);

  const onSearch = () => {
    if (searchTerm === "") {
      setIdle(true);
      return;
    }

    fetchBooks();
    setIdle(false);
  };

  return (
    <div className="max-w-[1520px] flex flex-col w-full bg-white">
      <MainNav setSearchTerm={setSearchTerm} onSearch={onSearch} />
      <MainBody books={books} idle={idle} data={data} setData={setData} />
    </div>
  );
};

export default Main;
