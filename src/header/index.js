"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import About from "@/about";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/button";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/store/ApiSlice/authSlice";
import { ShoppingCart } from "react-feather";
import Cart from "@/cart";
import { setIsCartSidebar } from "@/store/ApiSlice/cartSlice";

const Header = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { isCartSidebar } = useSelector((state) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  console.log("loginData", loginData);
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headeralignment}>
            <div className={styles.mobileMenuFlexAlignment}></div>

            <div className={styles.mainMenu}>
              <div className={styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/cart">Cart</Link>
                {/* <Link href="/">Home</Link> */}
             

              <Button
                text={loginData ? "Logout" : "Sign In"}
                onClick={() => {
                  route?.push("/auth");
                  dispatch(setUserData(true));
                }}
              ></Button>
            
               </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
