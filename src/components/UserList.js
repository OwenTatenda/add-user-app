import React from "react";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles["users-list"]}>
      {props.users.map((user, i) => (
        <User name={user.name} age={user.age} key={i}></User>
      ))}
    </ul>
  );
};

export default UserList;
