"use client";

import Button from "@/shared/components/button";
import React, { useState } from "react";
import styles from "./signUp.module.scss";
import { CardTitle, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import { X } from "react-feather";
import Input from "@/shared/components/input";
import toast from "react-hot-toast";
import Loader from "@/shared/components/Loader";
import Loginwithgoogle from "../loginwithgoogle";

const UserIcon = "/assets/icons/user-icon.png";
const EmailIcon = "/assets/icons/email-icon.png";
const PasswordIcon = "/assets/icons/password-icon.png";
const SignInImg = "/assets/images/signin-img.png";
const GoogleLogo = "/assets/icons/google-icon.png";

const SignUp = ({ signUpModal, setSignUpModal, setLoginmodal }) => {
  const [loader, setLoader] = useState(false);
  const [signUpData, setSignUpData] = useState({});
  const [errors, setErrors] = useState({});

  console.log("signUpModal", signUpModal);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const validate = () => {
    let isValid = true;

    if (!signUpData.firstName) {
      toast.error("Please enter your first name");
      isValid = false;
    }
    if (!signUpData.lastName) {
      toast.error("Please enter your last name");
      isValid = false;
    }
    if (!signUpData.email) {
      toast.error("Please enter your email");
      isValid = false;
    }
    if (!signUpData.password) {
      toast.error("Please enter your password");
      isValid = false;
    }
    return isValid;
  };

  const handleOnSubmit = () => {
    if (validate()) {
      setLoader(true);

      localStorage.setItem("signUpData", JSON.stringify(signUpData));
      setSignUpModal(false);
      setLoginmodal(true);
    }
  };

  const handleGoogleLogin = async () => {
      try {
      await signInWithPopup(auth,googleProvider);
      } catch (err){
        console.error(err);
      }
  };

  return (
    <>
      <div className={styles.loginModalAlignment}>
        <div className={styles.loginModalWrapper}>
          <div className={styles.loginModalBox}>
            <div className={styles.loginHeading}>
              <h4>Sign Up</h4>
              <div
                onClick={() => setSignUpModal(false)}
                className={styles.closeAlignment}
              >
                <X onClick={() => setSignUpModal(false)} />
                {/* <img src={closeicon} alt="closeicon" /> */}
              </div>
            </div>
            <div className={styles.loginBodyAlignment}>
              <div className={styles.loginformAlignment}>
                <div className={styles.inputAlignment}>
                  <Input
                    type="text"
                    label="First Name"
                    srcImg={UserIcon}
                    name="firstName"
                    value={signUpData.firstName}
                    onChange={handleOnChange}
                    placeholder="Enter your First Name"
                  />
                  <div>
                    <span className={styles.error}>{errors.firstname}</span>
                  </div>
                </div>
                <div className={styles.inputAlignment}>
                  <Input
                    type="text"
                    label="Last Name"
                    srcImg={UserIcon}
                    value={signUpData.lastName}
                    name="lastName"
                    onChange={handleOnChange}
                    placeholder="Enter your Last Name"
                  />
                  <div>
                    <span className={styles.error}>{errors.lastname}</span>
                  </div>
                </div>
                <div className={styles.inputAlignment}>
                  <Input
                    type="text"
                    label="Email"
                    srcImg={EmailIcon}
                    value={signUpData.email}
                    onChange={handleOnChange}
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <div>
                    <span className={styles.error}>{errors.email}</span>
                  </div>
                </div>
                <div className={styles.inputAlignment}>
                  <Input
                    type="password"
                    label="Password"
                    srcImg={PasswordIcon}
                    name="password"
                    value={signUpData.password}
                    onChange={handleOnChange}
                    placeholder="Enter your Password"
                  />
                  <div>
                    <span className={styles.error}>{errors.password}</span>
                  </div>
                </div>
                <div className={styles.loginButton}>
                  <Button
                    onClick={() => {
                      handleOnSubmit();
                    }}
                    text="Sign Up"
                    loading={loader}
                  />
                </div>
                <div className={styles.lostYourPassword}>
                  <span>
                    {" "}
                    <p className="text-center mt-2">
                      <span className="me-25">Already have an account?</span>
                      <span
                        onClick={() => {
                          setSignUpModal(false);
                          setLoginmodal(true);
                        }}
                      >
                        {" "}
                        Sign In Instead
                      </span>
                    </p>{" "}
                  </span>
                </div>
                <div>
                 <Loginwithgoogle />
                </div>
              </div>
              <div className={styles.loginModalSideIcon}>
                <img src={SignInImg} alt="SignInImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
