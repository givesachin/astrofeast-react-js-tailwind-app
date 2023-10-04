import React from "react";
import ProductItem from "./ProuductItem";
import { NavLink } from "react-router-dom";

const ProductContainer = ({ pitem, cardcontainer }) => {
  return (
    <div className="h-full flex overflow-scroll lg:overflow-hidden border-t border-black flex-nowrap p-8 dark:border-slate-300">
      <div className={`flex gap-8 ${cardcontainer}`}>
        {pitem.map((plist) => (
          <NavLink to="/shop/ProductDetail">
            <ProductItem key={plist.id} prodList={plist} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
