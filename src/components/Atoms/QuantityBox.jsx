import { React, useState } from "react";
import { useClientSideAuthorizedNetworkHandler } from "../../utils/network.utils";

const QuantityBox = ({product_id=undefined, cart: cart_ = undefined, price = 0, isDetailsPage = false, isFeastBoxPage = false, initQuantity = 1, isDisabled = false }) => {
  const [quantity, setQuantity] = useState(initQuantity);

  const { authorizedPost } = useClientSideAuthorizedNetworkHandler()

  function roundToTwoDecimals(value) {
    return Math.round(value * 100) / 100;
  }

  const handlePlus = () => {
    setQuantity(quantity + 1)

    if (cart_) {


      //cart_ object
      /*
      {
    "id": 122,
    "user_id": 14,
    "created_at": "2024-01-08T03:10:18.000000Z",
    "updated_at": "2024-01-08T03:10:18.000000Z",
    "state": "active",
    "items": [
        {
            "id": 3,
            "cart_id": 122,
            "product_type": "master_product_variant",
            "product_id": 3,
            "quantity": 1,
            "price": 40,
            "configuration": [],
            "created_at": "2024-01-04T11:39:03.000000Z",
            "updated_at": "2024-01-07T12:45:17.000000Z",
            "master_product_id": 2,
            "sku": "snack-v1",
            "default_media_id": null,
            "name": "The Snacks 1",
            "excerpt": null,
            "original_price": 40,
            "stock": 25,
            "units_preorder": 0,
            "units_backorder": 0,
            "weight": null,
            "height": null,
            "width": null,
            "length": null,
            "units_sold": 5,
            "last_sale_at": "2024-01-07 12:45:17",
            "deleted_at": null,
            "publish_date": null,
            "publish_timestamp": null,
            "description": null,
            "state": "draft",
            "tax_category_id": null,
            "media": [],
            "master_product": {
                "id": 2,
                "name": "The Snacks",
                "slug": "the snacks",
                "default_media_id": 3,
                "price": 40,
                "original_price": 40,
                "excerpt": null,
                "description": "<p>Snacks are defined as smaller, less structured meal that are not eaten during regular meal times, such as breakfast (morning), lunch (midday), and dinner (evening). Snacks come in a variety of forms including fresh ingredients and packaged and processed foods.<br></p>",
                "state": "draft",
                "weight": null,
                "height": null,
                "width": null,
                "length": null,
                "ext_title": null,
                "meta_keywords": "Snack",
                "meta_title": "The Snacks",
                "meta_description": null,
                "deleted_at": null,
                "publish_date": null,
                "created_at": "2024-01-04T11:32:36.000000Z",
                "publish_timestamp": null,
                "updated_at": "2024-01-04T11:35:51.000000Z",
                "tax_category_id": null,
                "stock_management": 1
            },
            "default_media": "https://test.astrofeast.com/admin/storage/3/Rectangle-2.png"
        },
        {
            "id": 5,
            "cart_id": 122,
            "product_type": "master_product_variant",
            "product_id": 5,
            "quantity": 1,
            "price": 32,
            "configuration": [],
            "created_at": "2024-01-04T12:30:43.000000Z",
            "updated_at": "2024-01-07T12:13:49.000000Z",
            "master_product_id": 3,
            "sku": "icecream-vanila",
            "default_media_id": null,
            "name": "Ice Cream Vanila",
            "excerpt": null,
            "original_price": 32,
            "stock": 225,
            "units_preorder": 0,
            "units_backorder": 0,
            "weight": null,
            "height": null,
            "width": null,
            "length": null,
            "units_sold": 1,
            "last_sale_at": "2024-01-07 12:13:49",
            "deleted_at": null,
            "publish_date": null,
            "publish_timestamp": null,
            "description": null,
            "state": "draft",
            "tax_category_id": null,
            "media": [],
            "master_product": {
                "id": 3,
                "name": "The Ice Creams",
                "slug": "theicecreams",
                "default_media_id": 4,
                "price": 32,
                "original_price": 32,
                "excerpt": null,
                "description": "<p>Ice cream is a colloidal emulsion made with water, ice, milk fat, milk protein, sugar and air. Water and fat have the highest proportions by weight creating an emulsion that has dispersed phase as fat globules. The emulsion is turned into foam by incorporating air cells which are frozen to form dispersed ice cells.</p>",
                "state": "draft",
                "weight": null,
                "height": null,
                "width": null,
                "length": null,
                "ext_title": null,
                "meta_keywords": "nice product,Ice Cream",
                "meta_title": "The Ice Creams",
                "meta_description": "The Ice Creams",
                "deleted_at": null,
                "publish_date": null,
                "created_at": "2024-01-04T12:29:32.000000Z",
                "publish_timestamp": null,
                "updated_at": "2024-01-04T12:31:38.000000Z",
                "tax_category_id": null,
                "stock_management": 1
            },
            "default_media": "https://test.astrofeast.com/admin/storage/4/Rectangle-3.png"
        }
    ],
    "adjustments_relation": []
}
      */

      const data = {
        //product_variant_id is the "id" of the item in cart.items
        product_variant_id: product_id,
        quantity: quantity + 1
        // cart: {

        //   ...cart_,
        //   items: cart_.items.map(cart_item => {
        //     if (cart_item.id === cart_.items[0].id) {
        //       return {
        //         ...cart_item,
        //         quantity: quantity + 1
        //       }
        //     }
        //     return cart_item
        //   })
        // }
      }

      authorizedPost('/update_cart_item', data).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }

  }
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);


      if (cart_) {

        const data = {
          //product_variant_id is the "id" of the item in cart.items
          product_variant_id: product_id,
          
          quantity: quantity - 1
          // cart: {

          //   ...cart_,
          //   items: cart_.items.map(cart_item => {
          //     if (cart_item.id === cart_.items[0].id) {
          //       return {
          //         ...cart_item,
          //         quantity: quantity - 1
          //       }
          //     }
          //     return cart_item
          //   })
          // }
        }



        authorizedPost('/update_cart_item', data).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
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
            disabled={isDisabled || quantity <= 1}
            className={`border border-black dark:border-slate-300
 text-black dark:text-gray-100 w-10 text-2xl`}
            onClick={handleMinus}
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
