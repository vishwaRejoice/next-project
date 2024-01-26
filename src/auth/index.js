"use client";

import React, { useState } from "react";
import SignUp from "./signUp";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/shared/components/button";
import styles from "./auth.module.scss";
import Login from "./login";
import { LogOut } from "react-feather";
import Logout from "./logout";

const Auth = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const [signUpModal, setSignUpModal] = useState(false);
  const [loginmodal, setLoginmodal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);

  console.log("signUpModalllll", signUpModal, userData);
  console.log("userData", userData);
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  return (
    <>
      {userData && (
        <>
          <div className={styles.myGtpDetailsAlignment}>
            <div className="container">
              {loginData ? (
                <div className={styles.myGtpDetailsBox}>
                  <h2>
                    Welcome to ProGPTs Sign in to continue your exploration of
                    our platform with all its exciting features.
                  </h2>

                  <div
                    className={styles.myGtpSignInButton}
                    // onClick={() => setLoginmodel(true)}
                  >
                    <Button
                      text="Logout"
                      onClick={() => {
                        // dispatch(setUserData(false));
                        setLogOutModal(true);
                        // localStorage.removeItem("loginData");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.myGtpDetailsBox}>
                  <h2>
                    Welcome to ProGPTs Sign in to continue your exploration of
                    our platform with all its exciting features.
                  </h2>

                  <div
                    className={styles.myGtpSignInButton}
                    // onClick={() => setLoginmodel(true)}
                  >
                    <Button
                      text="sign in"
                      onClick={() => setSignUpModal(true)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {signUpModal && (
            <SignUp
              signUpModal={signUpModal}
              setSignUpModal={setSignUpModal}
              setLoginmodal={setLoginmodal}
            />
          )}
          {loginmodal && (
            <Login
              loginmodal={loginmodal}
              setLoginmodal={setLoginmodal}
              setSignUpModal={setSignUpModal}
            />
          )}

          {logOutModal && (
            <Logout logOutModal={logOutModal} setLogOutModal={setLogOutModal} />
          )}
        </>
      )}
      {/* <SignUp/> */}
    </>
  );
};

export default Auth;
