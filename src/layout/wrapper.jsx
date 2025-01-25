import React, {useState, useEffect} from "react";
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
    </div>
  );
};

export default Wrapper;
