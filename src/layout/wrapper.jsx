import React, {useState, useEffect} from "react";
import { ToastContainer } from "react-toastify";
// internal
import BackToTopCom from "@/components/common/back-to-top";
import Loader from "@/components/loader/loader";

const Wrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return !isMounted ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Loader spinner="fade" loading={!isMounted} />
    </div>
  ) : (
    <div id="wrapper">
      {children}
      <BackToTopCom />
      {isMounted && <ToastContainer />} {/* ToastContainer only renders client-side */}
    </div>
  );
};

export default Wrapper;
