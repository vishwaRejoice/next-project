import React, { useState } from 'react'
import styles from "../signUp/signUp.module.scss"
import { X } from 'react-feather';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
import { useRouter } from 'next/navigation';
import Loginwithgoogle from '../loginwithgoogle';

const EmailIcon = "/assets/icons/email-icon.png";
const PasswordIcon = "/assets/icons/password-icon.png";
const SignInImg = "/assets/images/signin-img.png";

const Login = ({setLoginmodal,loginmodal,setSignUpModal}) => {
    const [loginData, setLoginData] = useState({});
  const [loader, setLoader] = useState(false);
  const route = useRouter();


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      }

      const storeData = JSON.parse(localStorage.getItem("signUpData"));

      const validate = () => {
        if(storeData.email === loginData.email && storeData.password === loginData.password){
            return true;
        }
        else{
            return false;
        }
    }

    const handleOnSubmit = () => {
        if (validate()) {
          setLoader(true);
    
          localStorage.setItem("loginData", JSON.stringify(loginData));
          setLoginmodal(false);
          route?.push("/")
        }
      }

  return (
    <>
    
    <div className={styles.loginModalAlignment}>
        <div className={styles.loginModalWrapper}>
          <div className={styles.loginModalBox}>
            <div className={styles.loginHeading}>
              <h4>Sign In</h4>
              <div
                onClick={() => setLoginmodal(false)}
                className={styles.closeAlignment}
              >
                <X onClick={() => setLoginmodal(false)} />
                {/* <img src={closeicon} alt="closeicon" /> */}
              </div>
            </div>
            <div className={styles.loginBodyAlignment}>
              <div className={styles.loginformAlignment}>
                <div className={styles.inputAlignment}>
                  <Input
                    type="text"
                    label="Email"
                    srcImg={EmailIcon}
                    value={loginData.email}
                    onChange={handleOnChange}
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <div>
                    {/* <span className={styles.error}>{errors.email}</span> */}
                  </div>
                </div>
                <div className={styles.inputAlignment}>
                  <Input
                    type="password"
                    label="Password"
                    srcImg={PasswordIcon}
                    name="password"
                    value={loginData.password}
                    onChange={handleOnChange}
                    placeholder="Enter your Password"
                  />
                  <div>
                    {/* <span className={styles.error}>{errors.password}</span> */}
                  </div>
                </div>
                <div className={styles.loginButton}>
                  <Button
                    onClick={() => {
                      handleOnSubmit();
                    }}
                    text="Sign In"
                    loading={loader}
                  />
                </div>
                <div className={styles.lostYourPassword}>
                  <span>
                    {" "}
                    <p className="text-center mt-2">
                      <span className="me-25">Don't have an account?</span>
                      <span
                        onClick={() => {
                          setSignUpModal(true);
                          setLoginmodal(false);
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
  )
}

export default Login