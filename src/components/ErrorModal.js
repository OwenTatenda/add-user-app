import React, { Fragment } from "react";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConFirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles["error-modal"]}>
      <div className={styles["h2"]}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles["p"]}>
        <p>{props.message}</p>
      </div>
      <div className={styles["btn"]}>
        <button onClick={props.onConFirm}>Okay</button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConFirm={props.onConFirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConFirm={props.onConFirm}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
