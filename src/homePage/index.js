"use client";
import React, { useState } from "react";
import styles from "./homePage.module.scss";
import Button from "@/shared/components/button";
import { useQRCode } from "next-qrcode";

const HomePage = () => {
  const { Canvas } = useQRCode();
  const { Image } = useQRCode();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.box}>
        <h1>hhhh</h1>
      </div>

      <h1 style={{color:"white"}}>Demo Next Qr</h1>
      <Canvas
        text={"https://vi-demo-next.netlify.app/cart"}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#fff",
            light: "#000",
          },
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{color:"white"}}>26 January Photo Qr</h1>
      <Image
        text={` https://images.herzindagi.info/image/2022/Jan/republic-day-messages-main.jpg `}
        options={{
          type: "image/jpeg",
          quality: 0.3,
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#fff",
            light: "#000",
          },
        }}
      />
    </div>
    // <h1>HomePage</h1>
  );
};

export default HomePage;
