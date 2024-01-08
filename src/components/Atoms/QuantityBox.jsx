import { React, useState } from "react";
import { useClientSideAuthorizedNetworkHandler } from "../../utils/network.utils";

const QuantityBox = ({ product_id = undefined, cart: cart_ = undefined, price = 0, isDetailsPage = false, isFeastBoxPage = false, initQuantity = 1, isDisabled = false, updateTotalCartAmount = undefined }) => {
  const [quantity, setQuantity] = useState(initQuantity);

  const { authorizedPost,authorizedDelete } = useClientSideAuthorizedNetworkHandler()

  function roundToTwoDecimals(value) {
    return Math.round(value * 100) / 100;
  }




  const handlePlus = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1)

    if (cart_) {


      const data = {
        product_variant_id: product_id,
        quantity: quantity + 1

      }

      authorizedPost('/update_cart_item', data).then((res) => {
        console.log(res.data)

        console.log("cartTotalToBeChanged", roundToTwoDecimals(res.data.cart_total))
        updateTotalCartAmount(roundToTwoDecimals(res.data.cart_total)); // Update totalCartAmount in OrderCheckout



      }).catch((err) => {
        console.log(err)
      })
    }

  }
  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);


      if (cart_) {

        const data = {
          product_variant_id: product_id,

          quantity: quantity - 1

        }



        authorizedPost('/update_cart_item', data).then((res) => {
          console.log(res.data)
          console.log("cartTotalToBeChanged", roundToTwoDecimals(res.data.cart_total))

          updateTotalCartAmount(roundToTwoDecimals(res.data.cart_total)); // Update totalCartAmount in OrderCheckout

        }).catch((err) => {
          console.log(err)
        })
      }

    }else {
      // If quantity goes below 1, call the delete cart API
      if (cart_) {
        authorizedPost('/delete_cart_item', { product_variant_id: product_id })
          .then((res) => {
            console.log(res.data);
            console.log("cartTotalToBeChanged", roundToTwoDecimals(res.data.cart_total))

            
            updateTotalCartAmount(roundToTwoDecimals(res.data.cart_total)); // Update totalCartAmount in OrderCheckout
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  return (
    <>
      <div
        className="w-full h-auto  flex flex-col justify-center py-5 dark:text-gray-100
    dark:bg-slate-900"
      >
        <div className="flex pr-4">
          <button
            disabled={isDisabled}
            className={`border border-black dark:border-slate-300
 text-black dark:text-gray-100 w-10 text-2xl`}
            onClick={handleMinus}
          >
            {quantity > 1? "-" : "x"}
          </button>
          <input
            type="numeric"
            className="w-10 font-Poppins font-semibold text-center text-black dark:bg-slate-900 dark:text-gray-100"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            disabled={isDisabled}
            className="border border-black
 bg-black text-white dark:text-gray-900
 dark:bg-slate-300  w-10 text-2xl"
            onClick={handlePlus}
          >
            +
          </button>
        </div>
      </div>
      {isDetailsPage
        ? <h4 className="font-Staatliches py-5 text-5xl">
          ${roundToTwoDecimals((parseFloat(price) * parseInt(quantity, 10)))}
        </h4>
        : isFeastBoxPage
          ? <></>
          : <p className="font-Poppins text-left text-gray-400">
            ${price * quantity}
          </p>}
    </>
  );
};

export default QuantityBox;
