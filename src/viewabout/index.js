"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ViewAbout = () => {
  const [data, setData] = useState([]);
  const path = usePathname();
  const lastPathname = path.substring(path.lastIndexOf("/") + 1);
  console.log("lastPathname", lastPathname);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      const res = jsonData?.map((item) => {
        return {
          name: item.name,
        };
      });

      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("daaaa", data);

  return (
    <>
      <div>hhhhhh</div>
      {data?.map((item, index) => {
        if (item.name.split(" ").join("-") === lastPathname) {
          return (
            <div key={index}>
              <h1 style={{color:"white"}}>{item.name}</h1>
            </div>
          );
        }
      })}
    </>
  );
};

export default ViewAbout;
