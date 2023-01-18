import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <li className={styles.user}>
      <p className="name" value={props.name}>
        {props.name}
      </p>
      <p className="age" value={props.age}>
        ({props.age} years old)
      </p>
    </li>
  );
};

export default User;
