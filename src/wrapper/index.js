'use client'
import Footer from "@/footer";
import Header from "@/header";
import React from "react";
import { Toaster } from "react-hot-toast";
import styles from "./wrapper.module.scss";
import store, { persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


const Wrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Toaster />
          <div>
            <div className={styles.wrapperSection}>
              <div className={styles.wrapperBg}>
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </PersistGate>
      </Provider>
    </>
  );
};

export default Wrapper;
