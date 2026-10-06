import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import loadingGif from "../../assets/LOADING/Loading.gif";
import "./Loader.css";

const Loader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small tick to trigger CSS transition for fade-in
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return ReactDOM.createPortal(
    <div className={`loader-fullscreen${visible ? " loader-visible" : ""}`}>
      <img
        src={loadingGif}
        alt=""
        className="loader-gif"
        aria-hidden="true"
      />
    </div>,
    document.body
  );
};

export default Loader;
