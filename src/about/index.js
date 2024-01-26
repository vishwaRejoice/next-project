"use client";

import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useRouter } from "next/navigation";
import Button from "@/shared/components/button";

const About = () => {
  const [data, setData] = useState([]);
  const [openTable, setOpenTable] = useState(false);
  const router = useRouter();
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      const res = jsonData?.map((item, index) => {
        return {
          name: item.name,
        };
      });

      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleViewClick = (row) => {
    const url = row.name.split(" ").join("-");
    router.push(`/viewabout/${url}`);
  };

  const tableCustomStyles = {
    headRow: {
      style: {
        color:'white',
        backgroundColor: '#1E1E1E'
      },
    },
    rows: {
      style: {
        color: "white",
        backgroundColor: "#1E1E1E"
      },
      stripedStyle: {
        color: "NORMALCOLOR",
        backgroundColor: "NORMALCOLOR"
      }
    }
  }

  return (
    // <div className="main">
    //  <h1> About</h1>
    // </div>
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>hello</h2>
          <Button text="view table" style={{marginLeft:"590px"}} onClick={() => setOpenTable(true)}></Button>

          {
            openTable && (
              <div className={styles.gptmodal}>
            <div className={styles.myGtpDetailsBox}>
              <h2>Users Details</h2>
              <h2>
                <DataTable
                  data={data}
                  customStyles={tableCustomStyles}
                  columns={[
                    {
                      name: "sr",
                      selector: (row, index) => index + 1,
                    },
                    {
                      name: "Name",
                      selector: (row) => row.name,
                      width: "300px",
                    },
                    {
                      name: "Action",
                      cell: (row) => (
                        <>
                          {/* <button onClick={() => handleViewClick(row)} >
                            View
                          </button> */}
                          <Button text="View" style={{marginTop:"10px"}} onClick={() => handleViewClick(row)}/>
                        </>
                      ),
                    },
                  ]}
                />
              </h2>

              <div
                className={styles.myGtpSignInButton}
                // onClick={() => setLoginmodel(true)}
              >
                <Button
                  onClick={() => setOpenTable(false)}
                  text="Cancel"
                  style={{ marginLeft: "10px" }}
                  className="ms-3"
                />
              </div>
            </div>
          </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default About;
