import { React, useState } from "react";

const QuantityBox = ({ price, isDetailsPage, initQuantity }) => {
  const [quantity, setQuantity] = useState(initQuantity);

  return (
    <>
      <div
        className="w-full h-auto  flex flex-col justify-center py-5 dark:text-gray-100
    dark:bg-slate-900"
      >
        <div className="flex pr-4">
          <button
          disabled={quantity<=1}
            className={`border border-black dark:border-slate-300
 text-black dark:text-gray-100 w-10 text-2xl`}
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <input
            type="numeric"
            className="w-10 font-Poppins font-semibold text-center text-black dark:bg-slate-900 dark:text-gray-100"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="border border-black
 bg-black text-white dark:text-gray-900
 dark:bg-slate-300  w-10 text-2xl"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      {isDetailsPage ? <h4 className="font-Staatliches py-5 text-5xl">${(price * quantity).toFixed(2)}</h4> : <p className="font-Poppins text-left text-gray-400">
        ${price * quantity}
      </p>}
    </>
  );
};

export default QuantityBox;
