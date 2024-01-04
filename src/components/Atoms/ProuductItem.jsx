import React from "react";

const ProductItem = ({ prodList }) => {
  return (
    <div
      className="h-auto w-72 flex flex-col border-black border dark:border-slate-300"
      key={prodList.id}
    >
      <img
        className="w-full object-cover h-72 border-black border-b"
        src={prodList?.media ? prodList.media[0]?.original_url:"#"}
        alt="product"
      />
      <div className="w-full h-auto flex items-end flex-col justify-center py-5">
        <p className="text-xl font-semibold w-full">{prodList.name}</p>
        <p className="text-base opacity-60 font-medium w-full ">
          {prodList.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
