"use client";
import React, { useState } from "react";
import styles from "./loginwithgoogle.module.scss";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const GoogleIcon = "/assets/icons/google-icon.png";

export default function Loginwithgoogle({ setSignUpModal,setLoginmodal,signUpModal }) {
  const [signInWithGoogle, user] = useSignInWithGoogle(firebase);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.user?.email) {
      handleSignin(user);
    }
  }, [user]);
  const handleSignin = (data) => {
    // if (login === true) {
    const body = {
      fname: data?._tokenResponse?.fullName,
      lname: data?._tokenResponse?.lastName,
      email: data?.user?.email,
      isSocial: true,
      refreshToken: data?._tokenResponse?.refreshToken,
      accessToken: data?.user?.accessToken,
      role: "6285e3dd1f53f21e70ac1b84",
    };

    if (data?.user?.phoneNumber && !isNaN(data?.user?.phoneNumber)) {
      body.phoneNumber = data?.user?.phoneNumber;
    }
    console.log("data", body);
    if (body) {
      if(signUpModal){

        setSignUpModal(false);
      }else{
        setLoginmodal(false);
      }
    } else {
      toast.error("Something went wrong");
    }
  };
  // dispatch(logIn(body))
  //   .unwrap()
  //   .then((res) => {
  //     if (res.result === 0) {
  //       setLoading(false);
  //       dispatch(setLogin(true));
  //       toast.success("Login successfully.");
  //       setSessionData(res?.payload?.token, res?.payload?.admin);
  //       localStorage.setItem("userInfo", JSON.stringify(res?.payload?.admin));
  //       localStorage.setItem("token", res?.payload?.token);
  //       if (backToSearchPromptEnheces?.length >0) {
  //         router.push(`${backToSearchPromptEnheces}`);
  //         dispatch(setBackToSearchPromptEnheces([]));
  //       } else {

  //         router.push("/");
  //       }
  //     } else {
  //       setLoading(false);

  //       toast.error(res?.message);
  //     }
  //   })
  //   .catch((err) => {
  //     setLoading(false);
  //     toast.error(err?.message);
  //   });


return (
  <div>
    <div className={styles.orAlignmnt}>
      <p>OR</p>
    </div>
    <div className={styles.loginWithGoogle} onClick={() => signInWithGoogle()}>
      <div className={styles.loginIcon}>
        <img src={GoogleIcon} alt="GoogleIcon" />
      </div>
      <p>Google</p>
    </div>
  </div>
);
}
