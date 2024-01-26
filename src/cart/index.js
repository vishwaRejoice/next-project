"use client";

import React, { useState } from "react";
import styles from "./cart.module.scss";
import Button from "@/shared/components/button";
import { CloseButton } from "reactstrap";
import { X } from "react-feather";
import { addToCart, setIsCartSidebar } from "@/store/ApiSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

let products = [
  {
    id: 1,
    product: "Cyberpunk 2077",
    category: "xbox",
    image: "https://imgur.com/3CF1UhY.png",
    price: 36.49,
  },
  {
    id: 2,
    product: "Grand Theft Auto 5",
    category: "xbox",
    image: "https://imgur.com/BqNWnDB.png",
    price: 21.99,
  },
  {
    id: 3,
    product: "Minecraft",
    category: "xbox",
    image: "https://imgur.com/LXnUnd2.png",
    price: 49.99,
  },
  {
    id: 4,
    product: "PUBG",
    category: "xbox",
    image: "https://imgur.com/Ondg3Jn.png",
    price: 5.09,
  },
  {
    id: 5,
    product: "FIFA 21",
    category: "xbox",
    image: "https://imgur.com/AzT9YMP.png",
    price: 17.49,
  },
  {
    id: 6,
    product: "Battlefield 5",
    category: "xbox",
    image: "https://imgur.com/X3MQNVs.png",
    price: 29.35,
  },
  {
    id: 7,
    product: "Watch Dogs 2",
    category: "xbox",
    image: "https://imgur.com/v3lqCEb.png",
    price: 18.99,
  },
  {
    id: 8,
    product: "Xbox Controller",
    category: "accessories",
    image: "https://imgur.com/a964vBm.png",
    price: 59.0,
  },
  {
    id: 9,
    product: "Xbox Controller",
    category: "accessories",
    image: "https://imgur.com/ntrEPb1.png",
    price: 69.0,
  },
  {
    id: 10,
    product: "Gaming Keyboard",
    category: "accessories",
    image: "https://imgur.com/VMe3WBk.png",
    price: 49.99,
  },
  {
    id: 11,
    product: "Gaming Mouse",
    category: "accessories",
    image: "https://imgur.com/wvpHOCm.png",
    price: 29.99,
  },
  {
    id: 12,
    product: "Switch Joy-Con",
    category: "accessories",
    image: "https://imgur.com/faQ0IXH.png",
    price: 13.99,
  },
];
const Cart = ({ isMenuOpen, setIsMenuOpen }) => {
  const { isCartSidebar } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  console.log("cart", cart);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.box}>
          {products?.map((product) => {
            return (
              <div className={styles.productCard}>
                <img
                  src={product.image}
                  style={{ height: "200px", width: "200px" }}
                  alt="product-image"
                />
                <h3 className={styles.description}>{product.product}</h3>
                <p className={styles.price}>${product.price}</p>
                <Button
                  className={styles.button}
                  text="Add to Cart"
                  onClick={() => dispatch(addToCart(product))}
                ></Button>
              </div>
            );
          })}
        </div>

        {/* <img src={backgroundImage} alt="background-image" /> */}
      </div>
    </>
    // <div className={styles.gptmodal}>
    //   <div className={styles.myGtpDetailsBox}>
    //     <h2>Cart List</h2>
    //     <X
    //       className={styles.closeicon}
    //       onClick={() => {
    //         dispatch(setIsCartSidebar(false));
    //         // setIsMenuOpen(false);
    //       }}
    //     />
    //     {cart?.map((item, index) => {
    //       return (
    //         <div className={styles.cartlist}>
    //           <div className={styles.cartlistimage}>
    //             <img src={item?.image} alt="image" />
    //           </div>
    //           <div className={styles.cartlistdetails}>
    //             <h3>{item?.name}</h3>
    //             <p>{item?.price}</p>
    //           </div>
    //         </div>
    //       );
    //     })}

    //     <div
    //       className={styles.myGtpSignInButton}
    //       // onClick={() => setLoginmodel(true)}
    //     ></div>
    //   </div>
    // </div>
  );
};

export default Cart;
