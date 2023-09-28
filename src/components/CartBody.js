import React from "react";
import cart from "../images/cart.jpg";
import notFound from "../images/not_found.jpg";
import { AiFillCloseCircle } from "react-icons/ai";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { TbMoodEmpty } from "react-icons/tb";

const CartBody = ({ data, setData }) => {
  const onDeleteItem = (id) => {
    let x = data.filter((value) => value.id !== id);

    setData(x);
    let y = JSON.stringify(x);
    localStorage.setItem("books", y);

    enqueueSnackbar("Book removed from cart", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const cartEmpty = () => {
    enqueueSnackbar("Cart is empty!!!", {
      autoHideDuration: 3000,
      variant: "error",
    });
  };

  return (
    <div
      className="max-w-[1520px] w-full min-h-screen"
      style={{ backgroundImage: `url(${cart})`, backgroundSize: "cover" }}
    >
      <SnackbarProvider />
      <div className="container mx-auto py-20 h-[100%]">
        {data !== "" && data.length > 0 ? (
          <div className="bg-transparent">
            {data.map((value, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 flex justify-between rounded-2xl mb-5 h-[200px]"
              >
                <div className="w-full">
                  <h2 className="text-3xl text-teal-800 font-sans">
                    {value.title}
                  </h2>
                  <h2 className="text-xl text-indigo-800 italic">
                    {value.author ? value.author : "Unknown"}
                  </h2>
                  <br />
                  <div className="relative group">
                    <h2 className="line-clamp-4 group-hover:hidden">
                      {value.description ? value.description : "-"}
                    </h2>
                    <h2
                      className="hidden absolute -translate-y-[20%] font-serif
                    group-hover:block rounded-lg p-2 group-hover:scale-105 group-hover: bg-white group-hover:text-lg"
                    >
                      {value.description ? value.description : ""}
                    </h2>
                  </div>
                </div>
                <img
                  src={value.image !== undefined ? value.image : notFound}
                  alt={value.title}
                />
                <AiFillCloseCircle
                  size={40}
                  className="translate-x-[23%] translate-y-[187%] cursor-pointer"
                  onClick={() => onDeleteItem(value.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[500px]">
            <h2 className="text-white font-bold text-6xl">
              <TbMoodEmpty
                size={200}
                onClick={cartEmpty}
                className="cursor-pointer"
              />
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartBody;
