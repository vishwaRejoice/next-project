import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import styles from "./logout.module.scss";
import Button from "@/shared/components/button";
import toast from "react-hot-toast";

export default function LogOut({ setLogOutModal, logOutModal }) {
  console.log("logOutModal", logOutModal);
  return (
    <>
      {logOutModal && (
        <div className={styles.gptmodal}>
          <div className={styles.myGtpDetailsBox}>
            <h2>Are you sure logout your account ?</h2>

            <div
              className={styles.myGtpSignInButton}
              // onClick={() => setLoginmodel(true)}
            >
              <Button
                text="Logout"
                className="ms-1"
                onClick={() => {
                  toast.success("Logout successfully..");
                  setLogOutModal(false);
                  localStorage.removeItem("loginData");
                }}
              />
              <Button
                text="Cancel"
                style={{ marginLeft: "10px" }}
                className="ms-3"
                onClick={() => {
                  setLogOutModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {/* {logOutModal && (
        <Modal isOpen={logOutModal} size="sm">
          <ModalHeader>Logout Account ?</ModalHeader>
          <ModalBody>
            <div>
              <p>Are you sure you want to logout this account ?</p>
            </div>
            {/* <div
                className="d-flex justify-content-center mt-2"
                style={{ margin: "10px" }}
              >
                {loader ? (
                  <Button disabled color="primary" style={{ margin: "10px" }}>
                    <Loder />
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    style={{ margin: "10px" }}
                    onClick={() => {
                      setLoader(true);
                      dispatch(deleteBlog(blogData?._id))
                        .then((res) => {
                          setLoader(false);
                          if (res?.payload?.success) {
                            toast.success("Group remove successfully..");
                            setBlogsData({});
                            dispatch(getBlogs());
                            setDeleteModal(false);
                          }
                        })
                        .then(() => {
                          setLoader(false);
                        });
                    }}
                  >
                    Delete
                  </Button>
                )}
    
                <Button
                  color="primary"
                  onClick={() => {
                    handaleDeleteModalClose();
                  }}
                  style={{ margin: "10px" }}
                  outline
                >
                  Cancel
                </Button>
              </div> */}
      {/* </ModalBody>
        </Modal>
      )} */}
    </>
  );
}
